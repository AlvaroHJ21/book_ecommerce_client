import { useToast } from '../../../hooks/useToast';
import { CategoryTag } from './components/CategoryTag';
import { useBookDetailPage } from './useBookDetailPage';

export const BookDetailsPage = () => {
    const { book, quantity, increaseQuantity, decreaseQuantity, handleClickAddToBag } =
        useBookDetailPage();

    return (
        <div className="container max-w-4xl m-auto mt-8 flex">
            <div className="flex-1">
                <img src={book?.image} alt="imagen del libro" className="h-full object-cover" />
            </div>
            <div className="flex-1 p-8 space-y-4">
                <div className="flex justify-between">
                    <div>
                        <h1 className="font-semibold mb-2">{book?.title}</h1>
                        <div className='flex gap-1 flex-wrap'>
                            {book?.categories.map((category) => (
                                <CategoryTag
                                    key={category.id}
                                    category={category}
                                    onClick={() => {}}
                                />
                            ))}
                        </div>
                    </div>

                    {book?.discount ? (
                        <div className="flex flex-col items-end">
                            <p className="text-gray-500 line-through">${book.price}</p>
                            <p className="text-primary text-lg">
                                ${book.price * ((100 - book.discount) / 100)}
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <p className="text-primary text-lg">${book?.price}</p>
                        </div>
                    )}
                </div>
                <p className="font-thin text-justify">{book?.description}</p>
                <div className="flex items-center">
                    <button onClick={decreaseQuantity} className="bg-gray-500 w-10 h-10 text-white">
                        -
                    </button>
                    <p className="w-10 text-center">{quantity}</p>
                    <button onClick={increaseQuantity} className="bg-gray-500 w-10 h-10 text-white">
                        +
                    </button>
                    <button
                        onClick={handleClickAddToBag}
                        className="uppercase text-xs bg-primary text-white flex-1 h-10 ml-4"
                    >
                        Add to bag
                    </button>
                </div>
            </div>
        </div>
    );
};
