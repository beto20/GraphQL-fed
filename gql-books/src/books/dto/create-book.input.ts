import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field({ description: 'Example field (placeholder)' })
  id: string;
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  genre: string;
  @Field()
  authorId: string;
}
