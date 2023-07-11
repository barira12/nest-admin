import { UserService } from "./user.service";
import { UserCreateDto } from "./models/user-create.dto";
import { UserUpdateDto } from "./models/user-update.dto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findall(page?: number): Promise<import("./models/paginate-result.interface").PaginatedResult>;
    all(): Promise<any>;
    create(body: UserCreateDto): Promise<any>;
    get(_id: number): Promise<any>;
    update(_id: number, body: UserUpdateDto): Promise<any>;
    delete(_id: number): Promise<any>;
}
