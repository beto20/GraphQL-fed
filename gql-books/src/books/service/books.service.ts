import { Injectable } from '@nestjs/common';
import { CreateBookInput } from '../dto/create-book.input';
import { Book } from '../entities/book.entity';

@Injectable()
export class BooksService {

  private readonly books: Book[] = [];

  create(createBookInput: CreateBookInput) {
    this.books.push(createBookInput);
    return createBookInput;
  }

  findAll() {
    return this.books;
  }

  findOne(id: string) {
    return this.books.find(book => book.id === id);
  }

  forAuthor(authorId: string) {
    return this.books.filter(book => book.authorId === authorId);
  }
}
