import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Ranking } from './ranking.model';
import { RankingService } from './ranking.service';

@Resolver((of) => Ranking)
export class RankingResolver {
  constructor(private readonly rankingService: RankingService) {}

  @Query((returns) => [Ranking])
  ranking(): Promise<Ranking[]> {
    return this.rankingService.getRanking();
  }
}
