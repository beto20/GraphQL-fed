import { Resolver, Query, Mutation, Args, Int, ResolveReference } from '@nestjs/graphql';
import { AuthorsService } from '../service/authors.service';
import { Author } from '../entities/author.entity';
import { CreateAuthorInput } from '../dto/create-author.input';
import { UpdateAuthorInput } from '../dto/update-author.input';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) {}

  @Mutation(() => Author)
  createAuthor(@Args('createAuthorInput') createAuthorInput: CreateAuthorInput) {
    return this.authorsService.create(createAuthorInput);
  }

  @Query(() => [Author], { name: 'authors' })
  findAll() {
    return this.authorsService.findAll();
  }

  @Query(() => Author, { name: 'author' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.authorsService.findOne(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }): Author {
    return this.authorsService.findOne(reference.id)
  }

}
