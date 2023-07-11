
import{Prop, Schema, SchemaFactory}from "@nestjs/mongoose";
import { Exclude } from "class-transformer";
import { ObjectId } from "mongodb";
import { Permission } from "src/permission/permission.entity";
import { Role } from "src/role/role.entity";



@Schema()
export class User extends Document{
  
    

    @Prop({type:ObjectId, ref:'Role'})
    role:Role[];

    @Prop({type:ObjectId, ref:'Permission'})
    permission:Permission[];
    @Prop()
    _id:number

    @Prop()
    first_name:string;

    @Prop()
    last_name:string;

    @Prop({unique:true})
    email:string;

    @Prop()
    @Exclude()
    password:string;
    




}
export const UserSchema = SchemaFactory.createForClass(User);







