import { Module } from '@nestjs/common';
import { AuthorsService } from './service/authors.service';
import { AuthorsResolver } from './resolver/authors.resolver';

@Module({
  providers: [AuthorsResolver, AuthorsService]
})
export class AuthorsModule {}
