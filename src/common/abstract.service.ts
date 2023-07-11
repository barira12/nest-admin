import { Inject, Injectable } from '@nestjs/common';
import { PaginatedResult } from 'src/user/models/paginate-result.interface';
import{MongoClient,Db}from 'mongodb';

@Injectable()

export abstract class AbstractService {

    
  

  public readonly DATABASE_NAME: string = '';
  public readonly database: Db;
  
  public readonly Collection_Name: string ='';

  
    
    
  
   protected constructor(
      @Inject('DATABASE_CONNECTION')
      public client = new MongoClient('mongodb://localhost:27017')
    ) {
      this.database = this.client.db(this.DATABASE_NAME);
    }
    async paginate(page = 1, relations = []): Promise<PaginatedResult> {
      try {
        const take = 15;
    
        const collection = this.database.collection(this.Collection_Name);
    
        if (!collection) {
          throw new Error('Collection not found');
        }
    
        const total = await collection.countDocuments();
        const data = await collection
          .find({})
          .skip((page - 1) * take)
          .limit(take)
          .toArray();
    
        return {
          data,
          meta: {
            total,
            page,
            last_page: Math.ceil(total / take),
          },
        };
      } catch (error) {
      
        console.error(error);
    
        throw new Error('Failed to paginate');
      }
    
    }

      async all():Promise<any>{
        return  this.database.collection(this.Collection_Name).find();
      }
    
    
    
      async create(body: any): Promise<any> {
        return await this.database.collection(this.Collection_Name).insertOne(body);
      } 
    
      async findOne( condition,relations =[]): Promise<any> {
        return await this.database.collection(this.Collection_Name).findOne(condition);
      
      }
    
      async update(_id: number,body:any): Promise<any> {
     return await this.database.collection(this.Collection_Name).updateOne({ObjectId:''},{$set:{role_id:''}},body);  
      }
    
      async delete(_id: number) :Promise<any>{ 
        return await this.database.collection(this.Collection_Name).deleteOne({ObjectId:''});
      } 
    
}
