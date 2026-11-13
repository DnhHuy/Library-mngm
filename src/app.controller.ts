import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service.js';
import { CreateBookDto } from './dto/createBook.dto.js';

@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createBook(@Body() createBookDto: CreateBookDto): createBookDto {
    return this.appService.createBook(createBookDto);
  }

  @Get()
  findAll(): createBookDto[] {
    return this.appService.findAll(CreateBookDto);
  }

  @Patch()
  updateBook(@Body() createBookDto: CreateBookDto): createBookDto {
    return this.appService.updateBook(createBookDto);
  }

  @Delete()
  deleteBook(@Body() createBookDto: CreateBookDto): CreateBookDto {
    return this.appService.deleteBook(createBookDto);
  }
}
