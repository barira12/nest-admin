import { User } from "src/user/models/user.entity";
import { Role } from "src/role/role.entity";
export declare class Permission {
    _id: number;
    name: string;
    user: User[];
    role: Role[];
}
