import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import{ObjectId} from 'mongodb';
import { Permission } from "src/permission/permission.entity";
import { User } from "src/user/models/user.entity";



@Schema()
export class Role extends Document{ 
   

    @Prop()
    _id:number

    @Prop({require :true})
    name:string;


 @Prop({type:ObjectId, ref:'User'})
    user:User[];

    @Prop({type:ObjectId, ref:'Permission'})
    permissions:Permission[];


    }
    export const RoleSchema = SchemaFactory.createForClass(Role);
  


