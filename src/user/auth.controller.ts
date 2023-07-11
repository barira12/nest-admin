import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  NotFoundException,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from 'src/auth/models/register.dto'
import { JwtService } from '@nestjs/jwt';
import { Response,Request } from 'express';
import { AuthGuard } from 'src/auth/auth/auth.guard';

@UseInterceptors(ClassSerializerInterceptor)
@Controller()
export class AuthController {
  database: any;

  private readonly Collection_Name: string = 'users';

  constructor(
    private userService: UserService,

    private jwtService: JwtService,
  ) {}
  @Post('register')
  async register(@Body() user: RegisterDto) {
    if (user.password !== user.confirm_password) {
      throw new BadRequestException('Password does not match');
    }
    const hashed = await bcrypt.hash(user.password, 12);
    return this.userService.create({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: hashed,
      role: {_id:1}
    });
  }

  @Post('login')
  async login(
   @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
   const user = await this.userService.findOne({email});

    if (!user) {
      throw new NotFoundException('user not found');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Invalid credentials');
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });

    response.cookie('jwt', jwt, { httpOnly: true });
    return user;
  }
  @UseGuards(AuthGuard)
  @Get('user')
  async user(@Req() request: Request) {
    const cookie = request.cookies['jwt'];

    const data = await this.jwtService.verifyAsync(cookie);
    return this.userService.findOne({ id: data['id'] });
  }
  @UseGuards(AuthGuard)
  @Post('logout')
  async logout(@Res({passthrough:true}) response: Response) {
    response.clearCookie('jwt');

    return {
      message: 'Success',
    };
  }
}
