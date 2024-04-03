import { MongoClient, Db } from "mongodb";


export default abstract class MongoRespository {
    private client: MongoClient;
  
    constructor(){
      this.client = new MongoClient('mongodb://127.0.0.1:27017/bd_api');
    }
  
    protected async connect(db_name: string): Promise<Db> {
      await this.client.connect()
      return this.client.db(db_name)
    }
  
    protected async disconnect(): Promise<void> {
      await this.client.close()
    }
  }