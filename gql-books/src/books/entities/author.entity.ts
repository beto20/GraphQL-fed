import { ObjectType, Field, Int, ID, Directive } from '@nestjs/graphql';
import { Book } from './book.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Author {
  @Field(() => ID)
  id: string;
  @Field(() => [Book])
  books?: Book[];
}
