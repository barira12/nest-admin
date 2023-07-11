"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user/user.service");
const mongodb_1 = require("mongodb");
const user_module_1 = require("./user/user.module");
const role_module_1 = require("./role/role.module");
const permission_module_1 = require("./permission/permission.module");
const common_module_1 = require("./common/common.module");
const role_service_1 = require("./role/role.service");
const permission_service_1 = require("./permission/permission.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        providers: [
            user_service_1.UserService, role_service_1.RoleService, permission_service_1.PermissionService,
            {
                provide: 'DATABASE_CONNECTION',
                useFactory: async () => {
                    var _a;
                    try {
                        const url = (_a = process.env.MONGO_URL) !== null && _a !== void 0 ? _a : 'mongodb://127.0.0.1:27017';
                        console.log('url', 'mongodb://localhost:27017');
                        const client = await mongodb_1.MongoClient.connect(url);
                        console.log('client');
                        return client;
                    }
                    catch (e) {
                        throw e;
                    }
                },
            },
        ],
        imports: [user_module_1.UserModule, role_module_1.RoleModule, permission_module_1.PermissionModule, common_module_1.CommonModule
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map