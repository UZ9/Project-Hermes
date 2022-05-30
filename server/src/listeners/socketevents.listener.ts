import { Server } from "socket.io";
import { matchDataService } from "../index";

export function startSocketListener(socketServer: Server) {
    socketServer.on('connect', (socket) => {
        // Forward socket to match data service
        matchDataService.connect(socket);
    })
}
