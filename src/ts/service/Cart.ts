import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    totalCost(): number {
        return this._items.reduce((sum, currentItem) => sum + currentItem.price, 0);
    }

    discountTotalCost(discount: number): number {
        const total = this.totalCost();
        return total * (1 - discount / 100);
    }

    removeItemById(id: number): void {
        this._items = this.items.filter(item => item.id !== id);
    }
    
    get items(): Buyable[] {
        return [...this._items]; 
    }
}