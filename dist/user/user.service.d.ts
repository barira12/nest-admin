import { Db, MongoClient } from 'mongodb';
import { PaginatedResult } from './models/paginate-result.interface';
import { AbstractService } from 'src/common/abstract.service';
export declare class UserService extends AbstractService {
    client: MongoClient;
    readonly DATABASE_NAME: string;
    readonly database: Db;
    readonly Collection_Name: string;
    constructor(client?: MongoClient);
    paginate(page?: number, relations?: any[]): Promise<PaginatedResult>;
}
