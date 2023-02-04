import { useNavigate } from 'react-router-dom';
import Book from '../../../../../domain/models/Book';
import styles from './BookItem.module.css';

interface Props {
    book: Book;
}

export const BookItem = ({ book }: Props) => {

    const navigate = useNavigate()

    function handleClick() {
        navigate(`/book/${book.id}`)
    }
    
    return (
        <li onClick={handleClick} className={`${styles.item} item md:w-60 border-[1px] p-1 relative`}>
            {book.discount ? (
                <div className={`${styles.discount} absolute top-0 right-0 p-2 bg-white z-10`}>
                    <p>{book.discount}% Off</p>
                </div>
            ) : null}
            <div className="overflow-hidden">
                <img
                    className={`${styles.img} w-full aspect-square object-cover`}
                    src="http://unblast.com/wp-content/uploads/2020/05/Square-Book-Mockup-2.jpg"
                    alt="portada"
                />
            </div>

            <div className="p-1 py-4">
                <div className="flex justify-between">
                    <div>
                        <p className="font-bold">{book.title}</p>
                        <p className="font-light">
                            {book.authors.map((author) => author).join(', ')}
                        </p>
                    </div>

                    {book.discount ? (
                        <div className="flex flex-col items-end">
                            <p className="text-gray-500 line-through">${book.price}</p>
                            <p className="text-primary text-lg">
                                ${book.price * ((100 - book.discount) / 100)}
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <p className="text-primary text-lg">${book.price}</p>
                        </div>
                    )}
                </div>
            </div>
        </li>
    );
};
