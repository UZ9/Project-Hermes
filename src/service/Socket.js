import { io } from "socket.io-client";

const SOCKET_URL = "192.168.1.71:5000";

export const socket = io(SOCKET_URL, { transports: ['websocket', 'polling', 'flashsocket'] });