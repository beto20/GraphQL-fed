import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { Book } from '../entities/book.entity';
import { BooksService } from '../service/books.service';
import { CreateBookInput } from '../dto/create-book.input';
import { Author } from '../entities/author.entity';
import { CurrentUser } from '../current-user.decorator';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Mutation(() => Book)
  createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.booksService.create(createBookInput);
  }

  @Query(() => [Book], { name: 'books' })
  findAll(@CurrentUser() user: Author) {
    console.log(user)
    return this.booksService.findAll();
  }

  @Query(() => Book, { name: 'book' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.booksService.findOne(id);
  }

  @ResolveField(() => Author)
  author(@Parent() book: Book): any {
    return { __typename: 'Author', id: book.authorId };
  }

}
