import dotenv from "dotenv"
import { startSocketListener } from "./listeners/socketevents.listener";
import { SocketManager } from './listeners/socketmanager.listener';
import { logger } from "./middlewares/logging.middleware";
import { MatchDataService } from "./services/matchdata.service";
import { MongoService } from "./services/mongodb.service";


// Allow server to use environmental variables
dotenv.config();

// Start socket server
const socketManager = new SocketManager();

const app = socketManager.getApp();
const socketServer = socketManager.getSocketServer();

// Services
const mongoService = new MongoService("hermes");
const matchDataService = new MatchDataService();

// Start socket event listener
startSocketListener(socketServer);

// Connect to MongoDB
mongoService.connect((err, client) => {
    if (err) logger.error(err);

    logger.info("Successfully initialized MongoDB Connection")
});

export { app, socketServer, mongoService, matchDataService };