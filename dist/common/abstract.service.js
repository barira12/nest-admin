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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractService = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
let AbstractService = class AbstractService {
    constructor(client = new mongodb_1.MongoClient('mongodb://localhost:27017')) {
        this.client = client;
        this.DATABASE_NAME = '';
        this.Collection_Name = '';
        this.database = this.client.db(this.DATABASE_NAME);
    }
    async paginate(page = 1, relations = []) {
        try {
            const take = 15;
            const collection = this.database.collection(this.Collection_Name);
            if (!collection) {
                throw new Error('Collection not found');
            }
            const total = await collection.countDocuments();
            const data = await collection
                .find({})
                .skip((page - 1) * take)
                .limit(take)
                .toArray();
            return {
                data,
                meta: {
                    total,
                    page,
                    last_page: Math.ceil(total / take),
                },
            };
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to paginate');
        }
    }
    async all() {
        return this.database.collection(this.Collection_Name).find();
    }
    async create(body) {
        return await this.database.collection(this.Collection_Name).insertOne(body);
    }
    async findOne(condition, relations = []) {
        return await this.database.collection(this.Collection_Name).findOne(condition);
    }
    async update(_id, body) {
        return await this.database.collection(this.Collection_Name).updateOne({ ObjectId: '' }, { $set: { role_id: '' } }, body);
    }
    async delete(_id) {
        return await this.database.collection(this.Collection_Name).deleteOne({ ObjectId: '' });
    }
};
AbstractService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATABASE_CONNECTION')),
    __metadata("design:paramtypes", [Object])
], AbstractService);
exports.AbstractService = AbstractService;
//# sourceMappingURL=abstract.service.js.map