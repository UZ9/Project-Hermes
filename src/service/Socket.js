import { io } from "socket.io-client";

const SOCKET_URL = "https://project-hermes-express-backend.herokuapp.com/";

export const socket = io(SOCKET_URL, { transports: ['websocket', 'polling', 'flashsocket'] });