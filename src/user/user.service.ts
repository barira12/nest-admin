import { Injectable, Inject, RequestTimeoutException } from '@nestjs/common';
import { Db, MongoClient} from 'mongodb';
import { PaginatedResult } from './models/paginate-result.interface';
import { AbstractService } from 'src/common/abstract.service';

@Injectable()
export class UserService  extends AbstractService{
  public readonly DATABASE_NAME: string = 'admin';
  public readonly database: Db;

  public readonly Collection_Name: string = 'users';
  

  constructor(
    @Inject('DATABASE_CONNECTION')
    public client = new MongoClient('mongodb://localhost:27017')
  ) {
    super(client);
    this.database = this.client.db(this.DATABASE_NAME);
  }

  async paginate(page =1,relations=[]): Promise<PaginatedResult> {
    const {data,meta} = await super.paginate(page, relations);
   

    return{
      data: data.map(user =>{
        const{password, ...data} =user
        return data;
      }),
      meta

    }
  }



 

}
