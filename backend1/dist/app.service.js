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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const ethers_1 = require("ethers");
const TokenJson = require("./assets/MyToken.json");
const BallotJson = require("./assets/TokenizedBallot.json");
const config_1 = require("@nestjs/config");
let AppService = class AppService {
    constructor(configService) {
        this.configService = configService;
        const apiKey = this.configService.get('INFURA_API_KEY');
        const pKey = this.configService.get('PRIVATE_KEY');
        this.wallet = new ethers_1.ethers.Wallet(pKey);
        this.provider = new ethers_1.ethers.providers.InfuraProvider('goerli', apiKey);
        this.lastBlock = this.provider.getBlock('latest');
        this.contract = new ethers_1.ethers.Contract(this.getContractAddress(), TokenJson.abi, this.provider);
        this.ballot = new ethers_1.ethers.Contract(this.configService.get('TOKENIZED_BALLOT'), BallotJson.abi, this.provider);
    }
    getHello() {
        return 'Hello World!';
    }
    getLastBlock() {
        return this.lastBlock;
    }
    getContractAddress() {
        const contractAddress = this.configService.get('TOKEN_CONTRACT');
        return contractAddress;
    }
    getTotalSupply() {
        return this.contract.totalSupply();
    }
    getBalance(address) {
        return this.contract.balanceOf(address);
    }
    async getReceipt(hash) {
        const tx = await this.provider.getTransaction(hash);
        const receipt = this.awaitTx(tx);
        return receipt;
    }
    async awaitTx(tx) {
        return await tx.wait();
    }
    requestTokens(address) {
        const signer = this.wallet.connect(this.provider);
        return this.contract
            .connect(signer)
            .mint(address, ethers_1.ethers.utils.parseUnits('1'));
    }
    castVote(proposal, amount) {
        const signer = this.wallet.connect(this.provider);
        return this.ballot.connect(signer).vote(proposal, amount);
    }
    winnerName() {
        const signer = this.wallet.connect(this.provider);
        return this.ballot.connect(signer).winnerName();
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map