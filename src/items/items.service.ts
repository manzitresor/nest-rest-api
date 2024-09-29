import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly Items: Item[] = [
    {
      id: '232332',
      name: 'Item One',
      qty: 321,
      description: 'This is item one from here',
    },
    {
      id: '242442',
      name: 'Item Two',
      qty: 12,
      description: 'This is item Two Description',
    },
  ];
  findAll(): Item[] {
    return this.Items;
  }
}
