import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import{MongoClient}from 'mongodb';
import { JwtModule } from '@nestjs/jwt';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [RoleController],
  providers: [RoleService,{provide: 'DATABASE_CONNECTION',
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
  imports:[RoleModule,
    CommonModule
    
  ],
  exports:[RoleService]
})
export class RoleModule {}
