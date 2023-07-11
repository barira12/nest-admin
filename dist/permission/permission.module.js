"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PermissionModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionModule = void 0;
const common_1 = require("@nestjs/common");
const permission_controller_1 = require("./permission.controller");
const permission_service_1 = require("./permission.service");
const mongodb_1 = require("mongodb");
let PermissionModule = PermissionModule_1 = class PermissionModule {
};
PermissionModule = PermissionModule_1 = __decorate([
    (0, common_1.Module)({
        controllers: [permission_controller_1.PermissionController],
        providers: [permission_service_1.PermissionService, { provide: 'DATABASE_CONNECTION',
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
            }
        ],
        imports: [PermissionModule_1,
        ],
        exports: [permission_service_1.PermissionService]
    })
], PermissionModule);
exports.PermissionModule = PermissionModule;
//# sourceMappingURL=permission.module.js.map