import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from '../dto/create-author.input';
import { UpdateAuthorInput } from '../dto/update-author.input';
import { Author } from '../entities/author.entity';

@Injectable()
export class AuthorsService {

  private readonly authors: Author[] = [];

  create(createAuthorInput: CreateAuthorInput) {
    this.authors.push(createAuthorInput);
    return createAuthorInput;
  }

  findAll() {
    return this.authors;
  }

  findOne(id: string) {
    return this.authors.find(author => author.id === id);
  }

}
