/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Permission } from "src/permission/permission.entity";
import { User } from "src/user/models/user.entity";
export declare class Role extends Document {
    _id: number;
    name: string;
    user: User[];
    permissions: Permission[];
}
export declare const RoleSchema: import("mongoose").Schema<Role, import("mongoose").Model<Role, any, any, any, import("mongoose").Document<unknown, any, Role> & Omit<Role & Required<{
    _id: number;
}>, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Role, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Role>> & Omit<import("mongoose").FlatRecord<Role> & Required<{
    _id: number;
}>, never>>;
