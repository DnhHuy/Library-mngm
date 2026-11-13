import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

import { AppService } from './app.service.js';
import { CreateBookDto } from './dto/createBook.dto.js';

@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // CREATE
  @Post()
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.appService.createBook(createBookDto);
  }

  // READ ALL
  @Get()
  findAll() {
    return this.appService.findAll();
  }

  // READ ONE
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.appService.findOne(id);
  }

  // UPDATE
  @Put(':id')
  updateBook(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<CreateBookDto>,
  ) {
    return this.appService.updateBook(id, updateData);
  }

  // DELETE
  @Delete(':id')
  deleteBook(@Param('id', ParseIntPipe) id: number) {
    return this.appService.deleteBook(id);
  }
}
