import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Observable, lastValueFrom } from 'rxjs';
import { ClientGrpc } from '@nestjs/microservices';
import { RANKING_SERVICE_NAME, RankingServiceClient } from './ranking';

@Injectable()
export class RankingService implements OnModuleInit {
  private rankingService: RankingServiceClient;

  constructor(@Inject('RANKING_MS') private client: ClientGrpc) {}

  onModuleInit() {
    this.rankingService =
      this.client.getService<RankingServiceClient>(RANKING_SERVICE_NAME);
  }

  async getRanking() {
    console.log('getRanking');
    let result = null;
    try {
      const result$ = this.rankingService.findAllRecords({});
      console.log('gRPC enviado');

      result = await lastValueFrom(result$);

      console.log('result:' + JSON.stringify(result));
    } catch (error) {
      console.log('error: ' + error);
    }

    return result.records;
  }
}
