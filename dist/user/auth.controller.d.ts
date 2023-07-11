import { UserService } from 'src/user/user.service';
import { RegisterDto } from 'src/auth/models/register.dto';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
export declare class AuthController {
    private userService;
    private jwtService;
    database: any;
    private readonly Collection_Name;
    constructor(userService: UserService, jwtService: JwtService);
    register(user: RegisterDto): Promise<any>;
    login(email: string, password: string, response: Response): Promise<any>;
    user(request: Request): Promise<any>;
    logout(response: Response): Promise<{
        message: string;
    }>;
}
