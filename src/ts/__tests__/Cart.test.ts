import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie'; 

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it('инициализирует пустую корзину при создании', () => {
    expect(cart.items.length).toBe(0);
  });

  it('корректно добавляет покупаемые предметы (книги)', () => {
    const book = new Book(1, 'Преступление и наказание', 'Достоевский', 800, 600);
    cart.add(book);

    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toBe(book);
  });

  it('корректно добавляет покупаемые предметы (фильмы)', () => {
    const movie = new Movie(2, 'Криминальное чтиво', 1000, 'Квентин Тарантино', 1994, 'США', 130, 'Криминал');
    cart.add(movie);

    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toBe(movie);
  });

  it('может содержать разные товары (книга и фильм)', () => {
    const book = new Book(1, 'Преступление и наказание', 'Достоевский', 800, 600);
    const movie = new Movie(2, 'Криминальное чтиво', 1000, 'Квентин Тарантино', 1994, 'США', 130, 'Криминал');
    cart.add(book);
    cart.add(movie);

    expect(cart.items.length).toBe(2);
    expect(cart.items[0]).toBe(book);
    expect(cart.items[1]).toBe(movie);
  });

  it('обеспечивает неизменность списка элементов', () => {
    const book = new Book(1, 'Преступление и наказание', 'Достоевский', 800, 600);
    cart.add(book);

    const items = cart.items;
    items.pop(); 

    expect(cart.items.length).toBe(1); 
  });

  it('правильно рассчитывает общую стоимость', () => {
    const book1 = new Book(1, 'Преступление и наказание', 'Достоевский', 800, 600);
    const book2 = new Book(2, 'Мастер и Маргарита', 'Булгаков', 1200, 450);
    cart.add(book1);
    cart.add(book2);

    expect(cart.totalCost()).toBe(2000); 
  });

  it('правильно рассчитывает общую стоимость со скидкой', () => {
    const book1 = new Book(1, 'Преступление и наказание', 'Достоевский', 800, 600);
    const book2 = new Book(2, 'Мастер и Маргарита', 'Булгаков', 1200, 450);
    cart.add(book1);
    cart.add(book2);

    const discountedPrice = cart.discountTotalCost(10); 
    expect(discountedPrice).toBe(1800); 
  });

  it('успешно удаляет элемент по его идентификатору', () => {
    const book1 = new Book(1, 'Преступление и наказание', 'Достоевский', 800, 600);
    const book2 = new Book(2, 'Мастер и Маргарита', 'Булгаков', 1200, 450);
    cart.add(book1);
    cart.add(book2);

    cart.removeItemById(1); 

    expect(cart.items.length).toBe(1); 
    expect(cart.items[0]).toBe(book2); 
  });

  it('ничего не делает, если элемент с указанным ID не найден', () => {
    const book = new Book(1, 'Преступление и наказание', 'Достоевский', 800, 600);
    cart.add(book);

    cart.removeItemById(2); 

    expect(cart.items.length).toBe(1); 
    expect(cart.items[0]).toBe(book); 
  });
});