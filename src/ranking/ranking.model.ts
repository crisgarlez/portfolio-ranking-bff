import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'ranking ' })
export class Ranking {
  @Field()
  id: string;

  @Field()
  monsterid: string;

  @Field()
  monstername: string;

  @Field()
  victories: string;

  @Field()
  defeats: string;
}
