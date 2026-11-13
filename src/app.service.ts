import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateBookDto } from './dto/createBook.dto.js';

type Book = CreateBookDto & {
  id: number;
};

let idCount = 1;

const books: Book[] = [];

@Injectable()
export class AppService {
  // CREATE
  createBook(createBookDto: CreateBookDto): Book {
    const newBook: Book = {
      ...createBookDto,
      id: idCount++,
    };

    books.push(newBook);

    return newBook;
  }

  // READ ALL
  findAll(): Book[] {
    return books;
  }

  // READ ONE
  findOne(id: number): Book {
    const book = books.find((book) => book.id === id);

    if (!book) {
      throw new NotFoundException(`Không tìm thấy sách với ID ${id}`);
    }

    return book;
  }

  // UPDATE
  updateBook(id: number, updateData: Partial<CreateBookDto>): Book {
    const book = this.findOne(id);

    Object.assign(book, updateData);

    return book;
  }

  // DELETE
  deleteBook(id: number): Book {
    const index = books.findIndex((book) => book.id === id);

    if (index === -1) {
      throw new NotFoundException(`Không tìm thấy sách với ID ${id}`);
    }

    const deletedBook = books[index];

    books.splice(index, 1);

    return deletedBook;
  }
}
