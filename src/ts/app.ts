import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(2, 'Matrix', 800, 'USA', 1999, 'SF', 3, 'Wake Up!'))

console.log(cart.items);

console.log(`Общая стоимость: ${cart.totalCost()} руб.`); 

const discountPrice = cart.discountTotalCost(10); 
console.log(`Стоимость со скидкой: ${discountPrice.toFixed(2)} руб.`); 

cart.removeItemById(1);
console.log(`Новая общая стоимость: ${cart.totalCost()} руб.`);