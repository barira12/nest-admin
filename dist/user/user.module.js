"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const user_service_1 = require("./user.service");
const mongodb_1 = require("mongodb");
const user_controller_1 = require("./user.controller");
const common_module_1 = require("../common/common.module");
let UserModule = UserModule_1 = class UserModule {
};
UserModule = UserModule_1 = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController, user_controller_1.UserController],
        providers: [user_service_1.UserService, {
                provide: 'DATABASE_CONNECTION',
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
        imports: [UserModule_1,
            common_module_1.CommonModule
        ],
        exports: [user_service_1.UserService]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map