import express from 'express'
import cors from 'cors';
import * as http from 'http';
import { Server } from 'socket.io'
import { logger } from "../middlewares/logging.middleware"


export class SocketManager {
    public static readonly PORT: number = 5000;

    private app: express.Application;
    private server: http.Server;
    private io: Server;
    private port: string | number;

    constructor() {
        this.initializeApp();
        this.initializeServer();
        this.setPort();
        this.initializeSockets();
        this.startServer();
    }

    private initializeApp(): void {
        this.app = express();
        this.app.use(cors());
    }

    private initializeServer(): void {
        this.server = http.createServer(this.app);
    }

    private setPort(): void {
        this.port = process.env.PORT || SocketManager.PORT; // Default to SocketManager.PORT if env not found
    }

    private initializeSockets(): void {
        this.io = new Server(this.server);
    }

    private startServer(): void {
        this.server.listen(this.port, () => logger.info(`Listening on port ${this.port}`));
    }

    public getApp(): express.Application {
        return this.app;
    }

    public getSocketServer(): Server {
        return this.io;
    }
}