import { PaginatedResult } from 'src/user/models/paginate-result.interface';
import { MongoClient, Db } from 'mongodb';
export declare abstract class AbstractService {
    client: MongoClient;
    readonly DATABASE_NAME: string;
    readonly database: Db;
    readonly Collection_Name: string;
    protected constructor(client?: MongoClient);
    paginate(page?: number, relations?: any[]): Promise<PaginatedResult>;
    all(): Promise<any>;
    create(body: any): Promise<any>;
    findOne(condition: any, relations?: any[]): Promise<any>;
    update(_id: number, body: any): Promise<any>;
    delete(_id: number): Promise<any>;
}
