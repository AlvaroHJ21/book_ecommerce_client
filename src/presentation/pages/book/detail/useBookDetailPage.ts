import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBooks } from '../../../hooks/useBooks';
import LocalBookRepository from '../../../../data/local/LocalBookRepository';
import Book from '../../../../domain/models/Book';
import { useStore } from '../../../../store/store';
import { useToast } from '../../../hooks/useToast';

export const useBookDetailPage = () => {

    const { showToast } = useToast();

    const [book, setBook] = useState<Book>();

    const [quantity, setQuantity] = useState(1);

    const { id } = useParams();

    const navigate = useNavigate();

    const { getProduct } = useBooks(new LocalBookRepository());

    useEffect(() => {
        if (id) getProduct(+id).then((book) => setBook(book)).catch(()=>{
            //Not found
            console.log('Not found');
            navigate('/not-found');
        });
    }, []);

    const { bag, addToBag, updateItem: uppdateBag } = useStore((state) => state);

    function increaseQuantity() {
        setQuantity(quantity + 1);
    }
    function decreaseQuantity() {
        if (quantity <= 1) return;
        setQuantity(quantity - 1);
    }

    function handleClickAddToBag() {
        if (!book) return;
        if (bag.find((b) => b.book.id === book.id)) {
            uppdateBag(book.id, quantity);
            showToast('Cantidad actualizada')
        } else {
            addToBag({
                book,
                quantity,
            });
            showToast('Libro agregado a la bolsa')
        }
    }
    return { book, quantity, increaseQuantity, decreaseQuantity, handleClickAddToBag };
};
