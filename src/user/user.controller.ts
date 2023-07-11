import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";
import * as bcrypt from 'bcrypt';
import { UserCreateDto } from "./models/user-create.dto";
import { AuthGuard } from "src/auth/auth/auth.guard";
import { UserUpdateDto } from "./models/user-update.dto";

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller()
export class UserController{
  

    constructor(private userService:UserService){

    }



    @Get('users')
    async findall(@Query('page')page =1){
      return this.userService.paginate(page,['role'])

    }
    @Get('users')
    async all ():Promise<any>{
      return this.userService.all()

    }
     
    
   

    @Post('users')
    async create(@Body() body: UserCreateDto):Promise<any>
    {
        const password = await bcrypt.hash('1234',12);
        const {role_id :data}= body;
        
        return this.userService.create({
          
          data,
           password,
         role: {_id:body.role_id}

        });

    }
    @Get('users/:id')
    async get(@Param('id') _id: number) {
      return await this.userService.findOne({ _id }, ['role']); 
    }


      @Put('users/:id')
      async update(
        @Param('id')_id :number,
        @Body()body:UserUpdateDto
      )
      {  
        const {role_id}= body; 
        await this.userService.update(role_id,body);    

        return await this.userService.findOne({_id});

      }
      @Delete('users/:id')
      async delete(@Param('id') _id:number) { 
        return await this.userService.delete(_id);
      }
}