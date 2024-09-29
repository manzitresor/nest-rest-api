import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create.item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `Get Your Id: ${id}`;
  }

  @Post()
  create(@Body() createitemDto: CreateItemDto): string {
    return `Name: ${createitemDto.name} Description: ${createitemDto.description}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Updated ${id} With Name: ${updateItemDto.name} Quantinty: ${updateItemDto.qty}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Deleted success ${id}`;
  }
}
