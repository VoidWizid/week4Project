import { ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';
export declare class AppService {
    private configService;
    provider: ethers.providers.Provider;
    contract: ethers.Contract;
    ballot: ethers.Contract;
    lastBlock: any;
    wallet: ethers.Wallet;
    constructor(configService: ConfigService);
    getHello(): string;
    getLastBlock(): any;
    getContractAddress(): string;
    getTotalSupply(): any;
    getBalance(address: string): any;
    getReceipt(hash: string): Promise<ethers.providers.TransactionReceipt>;
    awaitTx(tx: ethers.providers.TransactionResponse): Promise<ethers.providers.TransactionReceipt>;
    requestTokens(address: string): any;
    castVote(proposal: string, amount: number): any;
    winnerName(): any;
}
