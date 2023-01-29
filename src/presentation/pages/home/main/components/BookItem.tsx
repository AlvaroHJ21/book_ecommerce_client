import Book from '../../../../../domain/models/Book';

interface Props {
    book: Book;
}

export const BookItem = ({ book }: Props) => {
    return (
        <li className="item w-60 border-[1px] p-1 relative">
            <div className="absolute top-0 right-0 p-2 bg-white">
                <p>15% Off</p>
            </div>
            <img
                className="w-full aspect-square object-cover"
                src="http://unblast.com/wp-content/uploads/2020/05/Square-Book-Mockup-2.jpg"
                alt="portada"
            />
            <div className="p-1 py-4">
                <div className="flex justify-between">
                    <p className="font-bold">{book.title}</p>
                    <p className="text-primary">${book.price}</p>
                </div>
                <p className="font-light">
                    {book.authors.map((author) => author).join(', ')}
                </p>
            </div>
        </li>
    );
};
