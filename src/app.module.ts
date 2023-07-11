import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { MongoClient } from 'mongodb';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { CommonModule } from './common/common.module';
import { RoleService } from './role/role.service';
import { PermissionService } from './permission/permission.service';


@Module({
  providers: [
    UserService,RoleService,PermissionService,
    
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (): Promise<MongoClient> => {
        try {
          const url = process.env.MONGO_URL ?? 'mongodb://127.0.0.1:27017';
          
          console.log('url', 'mongodb://localhost:27017');
          const client = await MongoClient.connect(url);
          console.log('client');
          return client;
        } catch (e) {
          throw e;
        }
        
      },
    },
    
    

  ],
  imports: [UserModule, RoleModule, PermissionModule, CommonModule
  

  ],
})
export class AppModule {}
