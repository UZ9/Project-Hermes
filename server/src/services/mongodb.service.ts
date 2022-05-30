import { Db, MongoClient, Callback } from "mongodb";
import { mongoConfig } from "../configs/mongodb.config"
import { logger } from "../middlewares/logging.middleware"

export class MongoService {
    private readonly URI: string =  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k13sr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;;

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