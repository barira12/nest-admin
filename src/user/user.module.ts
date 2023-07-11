import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserService } from './user.service';
import{MongoClient} from 'mongodb';
import { UserController } from './user.controller';
import { CommonModule } from 'src/common/common.module';


@Module({
  

  controllers: [AuthController,UserController],
  providers: [UserService, {
    provide: 'DATABASE_CONNECTION',
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
  }],
  
  imports:[UserModule,
    CommonModule
  ],
          
  exports:[UserService]
  
  
  })
export class UserModule {}
