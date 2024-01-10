import { ReactNode, createContext, useEffect, useRef } from 'react'
import io, { Socket } from 'socket.io-client'

/**
 * Hook for managing websocket connections.
 * @param url - The url of the websocket server.
 * @param socketServerPath - The path of the websocket server.
 * @param stateUpdateCallback - Callback for updating the state of the websocket connection.
 * @param corsOrigin - The cors origin of the websocket server.
 */
interface SocketIoContextProps {
  on: (event: string, callback: (data: any) => void) => void
  emit: (event: string, payload: any) => void
  joinRoom: (name: string) => void
  connect: () => void
  disconnect: () => void
  emitAndListen: (event: string, data: any, callback: Function) => void
  stopListening: (event: string) => void
  socket: Socket
}

interface SocketIoContextProviderProps {
  children: ReactNode
  url: string
  path?: string
  cors?: string | string[]
  onStateChange?: (data: any) => void
}

export const SocketIoContext = createContext<SocketIoContextProps>(
  {} as SocketIoContextProps,
)

export default function SocketIoProvider({
  children,
  url,
  path,
  cors,
  onStateChange,
}: SocketIoContextProviderProps) {
  const manager = useRef<Socket<any, any> | undefined>()

  const connect = () => {
    manager.current = io(url, {
      transports: ['websocket'],
      autoConnect: true,
      reconnection: true,
      reconnectionDelay: 2000,
      reconnectionAttempts: 250,
      path: path || '',
      auth: {
        cors: {
          origin: cors || '*',
          methods: ['GET', 'POST'],
          credentials: true,
        },
      },
    })

    manager.current.on('connect_error', (error: Error) => {
      console.log(error.message)
      onStateChange && onStateChange({ state: 'connect_error', error })
    })

    manager.current.on('disconnect', (reason: string) => {
      onStateChange && onStateChange({ state: 'disconnect', reason })
    })
    manager.current.on('connect', () => {
      console.log('connected')
    })
  }

  const disconnect = () => {
    manager.current?.disconnect()
  }

  const joinRoom = (name: any) => manager.current?.emit('join', name)

  const emit = (event: any, data: any) => {
    manager.current.emit(event, data)
  }

  const on = (event: any, callback: (data: any) => void) => {
    manager.current && manager.current.on(event, callback)
  }

  const emitAndListen = async (
    event: string,
    data: any,
    callback: (data: any) => void,
  ) => {
    await new Promise((res: any) => {
      emit(event, data)
      res(0)
    })
    manager.current &&
      manager.current.on(event, (result: any) => {
        callback(result)
      })
  }

  const stopListening = async (event: string) => {
    manager.current?.removeListener(event)
  }

  useEffect(() => {
    connect()
    return () => {
      manager.current?.removeAllListeners()
    }
  }, [])

  return (
    <SocketIoContext.Provider
      value={{
        on,
        emit,
        connect,
        disconnect,
        joinRoom,
        emitAndListen,
        stopListening,
        socket: manager.current,
      }}
    >
      {children}
    </SocketIoContext.Provider>
  )
}
