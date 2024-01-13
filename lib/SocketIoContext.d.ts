import { ReactNode } from 'react';
import { Socket } from 'socket.io-client';
/**
 * Hook for managing websocket connections.
 * @param url - The url of the websocket server.
 * @param socketServerPath - The path of the websocket server.
 * @param stateUpdateCallback - Callback for updating the state of the websocket connection.
 * @param corsOrigin - The cors origin of the websocket server.
 */
interface SocketIoContextProps {
    on: (event: string, callback: (data: any) => void) => void;
    emit: (event: string, payload: any) => void;
    joinRoom: (name: string) => void;
    connect: (token?: string) => void;
    disconnect: () => void;
    emitAndListen: (event: string, data: any, callback: Function) => void;
    stopListening: (event: string) => void;
    socket: Socket;
    setAuthSocketToken: (token: string) => void;
}
interface SocketIoContextProviderProps {
    children: ReactNode;
    url: string;
    path?: string;
    cors?: string | string[];
    onStateChange?: (data: any) => void;
}
export declare const SocketIoContext: import("react").Context<SocketIoContextProps>;
export default function SocketIoProvider({ children, url, path, cors, onStateChange, }: SocketIoContextProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
