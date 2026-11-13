import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/createBook.dto.js';

const idconunt = 1;
const books: Book[] = [];

@Injectable()
export class BookService {
  createBook(createBookDto: CreateBookDto): Book {
    const newBook: Book = {
      id: idconunt++,
      ...createBookDto,
    };
    books.push(newBook);
    return newBook;
  }

  findAll(): Book[] {
    return books;
  }

  updateBook(createBookDto: CreateBookDto): Book {
    const index = books.findIndex((book) => book.id === createBookDto.id);
    if (index !== -1) {
      books[index] = { ...books[index], ...createBookDto };
      return books[index];
    }
    throw new Error('Không tìm thấy sách với ID đã cho');
  }

  deleteBook(createBookDto: CreateBookDto): Book {
    const index = books.findIndex((book) => book.id === createBookDto.id);
    if (index !== -1) {
      const deletedBook = books[index];
      books.splice(index, 1);
      return deletedBook;
    }
    throw new Error('Không tìm thấy sách với ID đã cho');
  }
}
