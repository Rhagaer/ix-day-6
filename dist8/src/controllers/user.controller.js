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
const rest_1 = require("@loopback/rest");
const repository_1 = require("@loopback/repository");
const user_repositry_1 = require("../repositories/user.repositry");
const User_1 = require("../models/User");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let UserController = class UserController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async createUser(user) {
        console.log(user);
        return await this.userRepo.create(User_1.User);
    }
};
__decorate([
    rest_1.post('/user'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
UserController = __decorate([
    __param(0, repository_1.repository(user_repositry_1.UserRepositry.name)),
    __metadata("design:paramtypes", [user_repositry_1.UserRepositry])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map