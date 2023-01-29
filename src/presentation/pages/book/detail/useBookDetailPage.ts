import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBooks } from '../../../hooks/useBooks';
import LocalBookRepository from '../../../../data/local/LocalBookRepository';
import Book from '../../../../domain/models/Book';
import { useStore } from '../../../../store/store';

export const useBookDetailPage = () => {
    const [book, setBook] = useState<Book>();

    const [quantity, setQuantity] = useState(1);

    const { id } = useParams();

    const { getProduct } = useBooks(new LocalBookRepository());

    const addToBag = useStore((state) => state.addToBag);

    useEffect(() => {
        // console.log(id);
        if (id) getProduct(+id).then((book) => setBook(book));
    }, []);

    function increaseQuantity() {
        setQuantity(quantity + 1);
    }
    function decreaseQuantity() {
        if (quantity <= 1) return;
        setQuantity(quantity - 1);
    }

    function handleAddToBag() {
        if (!book) return;
        // console.log('add');
        // console.log(book);
        // console.log(quantity);
        addToBag({
            book,
            quantity,
        });
    }
    return { book,  quantity, increaseQuantity, decreaseQuantity, handleAddToBag };
};
