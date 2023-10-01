import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { Book } from '../entities/book.entity';
import { BooksService } from '../service/books.service';
import { Author } from '../entities/author.entity';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(private readonly booksService: BooksService) {}

  @ResolveField(() => [Book])
  books(@Parent() author: Author): Book[] {
    return this.booksService.forAuthor(author.id)
  }

}
