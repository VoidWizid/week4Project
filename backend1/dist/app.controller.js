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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const requestToken_dto_1 = require("./dtos/requestToken.dto");
const castVote_dto_1 = require("./dtos/castVote.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getLastBlock() {
        return this.appService.getLastBlock();
    }
    getContractAddress() {
        return this.appService.getContractAddress();
    }
    getTotalSupply() {
        return this.appService.getTotalSupply();
    }
    getBalance(address) {
        return this.appService.getBalance(address);
    }
    getReceipt(hash) {
        return this.appService.getReceipt(hash);
    }
    winnerName() {
        return this.appService.winnerName();
    }
    requestTokens(body) {
        return this.appService.requestTokens(body.address);
    }
    castVote(body) {
        return this.appService.castVote(body.proposal, body.amount);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('last-block'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getLastBlock", null);
__decorate([
    (0, common_1.Get)('contract-address'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getContractAddress", null);
__decorate([
    (0, common_1.Get)('total-supply'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getTotalSupply", null);
__decorate([
    (0, common_1.Get)('balance/:address'),
    __param(0, (0, common_1.Param)('address')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getBalance", null);
__decorate([
    (0, common_1.Get)('receipt/:hash'),
    __param(0, (0, common_1.Query)('hash')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getReceipt", null);
__decorate([
    (0, common_1.Get)('winner-name'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "winnerName", null);
__decorate([
    (0, common_1.Post)('request-tokens'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [requestToken_dto_1.RequestTokenDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "requestTokens", null);
__decorate([
    (0, common_1.Post)('cast-vote'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [castVote_dto_1.CastVoteDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "castVote", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map