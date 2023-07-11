import { Db, MongoClient } from 'mongodb';
import { AbstractService } from 'src/common/abstract.service';
export declare class PermissionService extends AbstractService {
    client: MongoClient;
    readonly DATABASE_NAME: string;
    readonly database: Db;
    readonly Collection_Name: string;
    constructor(client?: MongoClient);
}
