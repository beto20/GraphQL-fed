import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field({ description: 'Example field (placeholder)' })
  id: string;
  @Field()
  name: string;
  @Field()
  lastname: string;
  @Field()
  age: number;
}
