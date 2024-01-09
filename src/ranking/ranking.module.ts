import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { RANKINGMS_PACKAGE_NAME } from './ranking';
import { RankingService } from './ranking.service';
import { RankingResolver } from './ranking.resolver';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RANKING_MS',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:3007',
          package: RANKINGMS_PACKAGE_NAME,
          protoPath: join(__dirname, 'ranking.proto'),
        },
      },
    ]),
  ],
  providers: [RankingResolver, RankingService],
})
export class RankingModule {}
