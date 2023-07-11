"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongodb_1 = require("mongodb");
class Permission {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Permission.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true }),
    __metadata("design:type", String)
], Permission.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: 'User' }),
    __metadata("design:type", Array)
], Permission.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongodb_1.ObjectId, ref: 'Role' }),
    __metadata("design:type", Array)
], Permission.prototype, "role", void 0);
exports.Permission = Permission;
//# sourceMappingURL=permission.entity.js.map