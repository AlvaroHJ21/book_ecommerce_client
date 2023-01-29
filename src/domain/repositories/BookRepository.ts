import Book from '../models/Book';

export abstract class BookRepository {
    abstract getBooks(): Promise<Book[]>;

    abstract getBook(id: number): Promise<Book>;
}
