import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from 'src/auth/auth/auth.guard';

@Module({

    imports:[
        JwtModule.register({
            secret:'secret',
            signOptions: { expiresIn: "20h" },
          }),
    ],
    exports:[JwtModule],
    providers:[AuthGuard]
})
export class CommonModule {}
