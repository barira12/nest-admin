import { Module } from '@nestjs/common';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';
import{MongoClient} from 'mongodb';

@Module({
  controllers: [PermissionController],
  providers: [PermissionService,{provide: 'DATABASE_CONNECTION',
  useFactory: async (): Promise<MongoClient> => {
    try {
      const url = process.env.MONGO_URL ?? "mongodb://127.0.0.1:27017";
      console.log("url","mongodb://localhost:27017")
      const client =await MongoClient.connect (url);
      console.log("client")
      return client;
    } catch (e) {
      throw e;
    }
  }

  }
  
  
  ],
  imports:[PermissionModule,
    
  ],
  exports:[PermissionService]
})
export class PermissionModule {}
