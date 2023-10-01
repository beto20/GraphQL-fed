import { Module } from '@nestjs/common';
import { BooksService } from './service/books.service';
import { BooksResolver } from './resolver/books.resolver';
import { AuthorsResolver } from './resolver/author.resolver';

@Module({
  providers: [BooksResolver, BooksService, AuthorsResolver]
})
export class BooksModule {}
