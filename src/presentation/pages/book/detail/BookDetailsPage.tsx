import { useBookDetailPage } from './useBookDetailPage';

export const BookDetailsPage = () => {
    const { book, quantity, increaseQuantity, decreaseQuantity, handleAddToBag } =
        useBookDetailPage();

    return (

            <div className="container max-w-4xl m-auto mt-8 flex">
                <div className="flex-1">
                    <img src={book?.image} alt="imagen del libro" className="h-full object-cover" />
                </div>
                <div className="flex-1 p-8 space-y-4">
                    <div className="flex justify-between">
                        <h1 className="font-semibold">{book?.title}</h1>
                        <h2>S/{book?.price}</h2>
                    </div>
                    <p className="font-thin text-justify">{book?.description}</p>
                    <div className="flex items-center">
                        <button
                            onClick={decreaseQuantity}
                            className="bg-gray-500 w-10 h-10 text-white"
                        >
                            -
                        </button>
                        <p className="w-10 text-center">{quantity}</p>
                        <button
                            onClick={increaseQuantity}
                            className="bg-gray-500 w-10 h-10 text-white"
                        >
                            +
                        </button>
                        <button
                            onClick={handleAddToBag}
                            className="uppercase text-xs bg-primary text-white flex-1 h-10 ml-4"
                        >
                            Add to bag
                        </button>
                    </div>
                </div>
            </div>
    );
};
