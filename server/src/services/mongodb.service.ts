import { Db, MongoClient, Callback } from "mongodb";
import { mongoConfig } from "../configs/mongodb.config"
import { logger } from "../middlewares/logging.middleware"

export class MongoService {
    private readonly URI: string =  `mongodb+srv://${mongoConfig.user}:${mongoConfig.password}@cluster0.k13sr.mongodb.net/${mongoConfig.name}?retryWrites=true&w=majority`;;

    private db: Db;
    private dbName: string;
    private client: MongoClient;

    constructor(dbName: string) {
        this.dbName = dbName;

        this.initializeClient();
    }

    private initializeClient(): void {
           this.client = new MongoClient(this.URI);
    }

    public connect(callback: Callback<MongoClient>): void {
        this.client.connect(err => {
            if (err) throw err;

            this.db = this.client.db(this.dbName);

            callback(err);
        })
    }

    public getDb(): Db {
        return this.db;
    }

    public getClient(): MongoClient {
        return this.client;
    }

}