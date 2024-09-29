import { Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Post()
  create(): string {
    return 'Created successfull';
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `Successful updated ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Deleted success ${id}`;
  }
}
