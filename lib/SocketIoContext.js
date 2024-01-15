"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIoContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var socket_io_client_1 = __importDefault(require("socket.io-client"));
exports.SocketIoContext = (0, react_1.createContext)({});
function SocketIoProvider(_a) {
    var _this = this;
    var children = _a.children, url = _a.url, path = _a.path, cors = _a.cors, onStateChange = _a.onStateChange;
    var manager = (0, react_1.useRef)();
    var connect = function (token) {
        console.log('try connect');
        manager.current = (0, socket_io_client_1.default)(url, {
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
                token: token,
            },
        });
    };
    var disconnect = function () {
        var _a;
        (_a = manager.current) === null || _a === void 0 ? void 0 : _a.disconnect();
    };
    var joinRoom = function (name) { var _a; return (_a = manager.current) === null || _a === void 0 ? void 0 : _a.emit('join', name); };
    var emit = function (event, data) {
        manager.current.emit(event, data);
    };
    var on = function (event, callback) {
        manager.current && manager.current.off(event);
        manager.current && manager.current.on(event, callback);
    };
    var emitAndListen = function (event, data, callback) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (res) {
                        emit(event, data);
                        res(0);
                    })];
                case 1:
                    _a.sent();
                    manager.current &&
                        manager.current.on(event, function (result) {
                            callback(result);
                        });
                    return [2 /*return*/];
            }
        });
    }); };
    var stopListening = function (event) { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            (_a = manager.current) === null || _a === void 0 ? void 0 : _a.removeListener(event);
            return [2 /*return*/];
        });
    }); };
    var setAuthSocketToken = function (token) {
        console.log('set auth token socket');
        manager.current.auth = {
            token: token,
        };
    };
    (0, react_1.useEffect)(function () {
        manager.current &&
            manager.current.on('connect_error', function (error) {
                console.log(error.message);
                onStateChange && onStateChange({ state: 'connect_error', error: error });
            });
        manager.current &&
            manager.current.on('disconnect', function (reason) {
                onStateChange && onStateChange({ state: 'disconnect', reason: reason });
            });
        manager.current &&
            manager.current.on('connect', function () {
                console.log('connected');
            });
        return function () {
            var _a;
            (_a = manager.current) === null || _a === void 0 ? void 0 : _a.removeAllListeners();
        };
    }, [manager.current]);
    return ((0, jsx_runtime_1.jsx)(exports.SocketIoContext.Provider, { value: {
            on: on,
            emit: emit,
            connect: connect,
            disconnect: disconnect,
            joinRoom: joinRoom,
            emitAndListen: emitAndListen,
            stopListening: stopListening,
            socket: manager.current,
            setAuthSocketToken: setAuthSocketToken,
        }, children: children }));
}
exports.default = SocketIoProvider;
