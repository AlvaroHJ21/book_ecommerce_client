import { useEffect, useState } from 'react';

import Book from '../../domain/models/Book';
import BookRepository from '../../domain/repositories/BookRepository';

export const useBooks = (repository: BookRepository) => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const booksReponse = await repository.getBooks();
        setBooks(booksReponse);
    }

    async function getProduct(id: number) {
        try {
            const book = await repository.getBook(id);
            return book;
        } catch (error: any) {
            console.log(error.message);
            throw new Error(error);
        }
    }

    return { books, getProduct };
};
