import {  Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { AuthGuard } from 'src/auth/auth/auth.guard';
@UseGuards(AuthGuard)
@Controller('roles')  
export class RoleController {

    constructor(private roleService:RoleService){

    }
    @Get ()
    async all(){
        return this.roleService.all();
    }
    @Post()
    async create(
            @Body('name')name:string,
            @Body('permissions')_ids:number[],
    )
    {
        return this.roleService.create({
          
          name,
          permissions:_ids.map(_id=>({_id}))
        });

    }
  

    @Get ('id')
    async get(_id:number) {
        return this.roleService.findOne({_id},['permissons']);
    
      }


      @Put('id')
      async update(
        @Param('id')_id :number,
        @Body('name')name:string,
        @Body('permissions')_ids:number[],

      )
      {
        await this.roleService.update(_id,{name});

        const role = this.roleService.findOne({_id}) 

        return this.roleService.create({
          role,
          permissions: _ids.map(_id=>({_id}))
        });

      }
      @Delete('id')
      async delete(@Param('id') _id: number) {
        return await this.roleService.delete(_id);
      } 
}
    

