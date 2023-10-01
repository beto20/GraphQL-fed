import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Author } from './author.entity';

@ObjectType()
export class Book {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: string;
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  genre: string;
  @Field()
  authorId: string;
  @Field(() => Author)
  author?: Author;
}
