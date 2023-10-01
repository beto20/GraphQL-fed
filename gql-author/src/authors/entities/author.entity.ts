import { ObjectType, Field, Int, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Author {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: string;
  @Field()
  name: string;
  @Field()
  lastname: string;
  @Field()
  age: number;
}
