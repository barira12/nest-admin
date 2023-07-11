"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RoleModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModule = void 0;
const common_1 = require("@nestjs/common");
const role_controller_1 = require("./role.controller");
const role_service_1 = require("./role.service");
const mongodb_1 = require("mongodb");
const common_module_1 = require("../common/common.module");
let RoleModule = RoleModule_1 = class RoleModule {
};
RoleModule = RoleModule_1 = __decorate([
    (0, common_1.Module)({
        controllers: [role_controller_1.RoleController],
        providers: [role_service_1.RoleService, { provide: 'DATABASE_CONNECTION',
                useFactory: async () => {
                    var _a;
                    try {
                        const url = (_a = process.env.MONGO_URL) !== null && _a !== void 0 ? _a : "mongodb://127.0.0.1:27017";
                        console.log("url", "mongodb://localhost:27017");
                        const client = await mongodb_1.MongoClient.connect(url);
                        console.log("client");
                        return client;
                    }
                    catch (e) {
                        throw e;
                    }
                }
            }],
        imports: [RoleModule_1,
            common_module_1.CommonModule
        ],
        exports: [role_service_1.RoleService]
    })
], RoleModule);
exports.RoleModule = RoleModule;
//# sourceMappingURL=role.module.js.map