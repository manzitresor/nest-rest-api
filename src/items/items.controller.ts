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
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly ItemsService: ItemsService) {}
  @Get()
  findAll(): Promise<Item[]> {
    return this.ItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.ItemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.ItemsService.create(createItemDto);
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.ItemsService.update(id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Item> {
    return this.ItemsService.delete(id);
  }
}
