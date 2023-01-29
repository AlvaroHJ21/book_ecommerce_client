import { BagItem } from '../../../../domain/models/BagItem';

interface Props {
    item: BagItem;
}

export const BagItemCard = ({ item }: Props) => {
    const { book, quantity } = item;
    return (
        <div className="flex mx-4 my-2">
            <div className="">
                <img className="w-24 h-24 object-cover" src={book.image} alt="" />
            </div>
            <div className="p-2 flex-1 flex flex-col">
                <h3 className='flex-1'>{book.title}</h3>
                <div className="flex items-center">
                    <button className="bg-gray-500 w-8 h-8 text-white">-</button>
                    <p className="w-10 text-center">{quantity}</p>
                    <button className="bg-gray-500 w-8 h-8 text-white">+</button>
                </div>
            </div>
            <p>S/{book.price}</p>
        </div>
    );
};
