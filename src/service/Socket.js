import { io } from "socket.io-client";

const SOCKET_URL = "https://project-hermes-frontend.herokuapp.com/";

export const socket = io(SOCKET_URL, {transports: ['websocket', 'polling', 'flashsocket']});