import { Prop } from "@nestjs/mongoose";
import { User } from "src/user/models/user.entity";
import{ObjectId} from 'mongodb';
import { Role } from "src/role/role.entity";


export class Permission{

    @Prop()
    _id:number
    
    @Prop({require :true})
    name:string;
    
    @Prop({ ref:'User'})
    user:User[];
    
    @Prop({type:ObjectId, ref:'Role'})
    role:Role[];
    
    

} 