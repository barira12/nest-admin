import { RoleService } from './role.service';
export declare class RoleController {
    private roleService;
    constructor(roleService: RoleService);
    all(): Promise<any>;
    create(name: string, _ids: number[]): Promise<any>;
    get(_id: number): Promise<any>;
    update(_id: number, name: string, _ids: number[]): Promise<any>;
    delete(_id: number): Promise<any>;
}
