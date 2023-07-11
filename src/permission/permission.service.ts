import { Inject, Injectable } from '@nestjs/common';
import { Db, MongoClient} from 'mongodb';
import { AbstractService } from 'src/common/abstract.service';

@Injectable()
export class PermissionService extends AbstractService {
  public readonly DATABASE_NAME: string = 'admin';
  public readonly database: Db;
    
  
  public readonly Collection_Name: string = 'permissions';
    
    
  
     constructor(
      @Inject('DATABASE_CONNECTION')
      public client = new MongoClient('mongodb://localhost:27017')
    ) {
      super(client);
      this.database = this.client.db(this.DATABASE_NAME);
    }
}
