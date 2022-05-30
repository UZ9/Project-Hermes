import { io } from "socket.io-client";

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || "https://project-hermes-express-backend.herokuapp.com/";

export const socket = io(SOCKET_URL, { transports: ['websocket', 'polling', 'flashsocket'] });