import { AppService } from './app.service';
import { RequestTokenDto } from './dtos/requestToken.dto';
import { CastVoteDto } from './dtos/castVote.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getLastBlock(): any;
    getContractAddress(): string;
    getTotalSupply(): any;
    getBalance(address: string): any;
    getReceipt(hash: string): Promise<import("@ethersproject/abstract-provider").TransactionReceipt>;
    winnerName(): any;
    requestTokens(body: RequestTokenDto): any;
    castVote(body: CastVoteDto): any;
}
