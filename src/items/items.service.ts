import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "123123",
            name: "First",
            qty: 795,
            description: "This is a ess"
        },
        {
            id: "54645",
            name: "Second",
            qty: 1,
            description: "This is a dres"
        },
        {
            id: "246754",
            name: "Third",
            qty: 85,
            description: "This is a tres"
        },
    ];

    findAll(): Item[] {
        return this.items
    }

    findOne(id: string): Item {
        return this.items.find(item => item.id == id)
    }
}
