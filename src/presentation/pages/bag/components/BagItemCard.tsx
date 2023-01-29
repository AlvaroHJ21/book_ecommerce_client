import { BagItem } from '../../../../domain/models/BagItem';
import { useStore } from '../../../../store/store';

interface Props {
    item: BagItem;
    onClickIncrease: () => void;
    onClickDecrease: () => void;
    onClickDelete: () => void;
}

export const BagItemCard = ({ item, onClickIncrease, onClickDecrease, onClickDelete }: Props) => {
    const { book, quantity } = item;

    const { updateItem: uppdateBag } = useStore((state) => state);

    return (
        <div className="flex mx-4 my-2">
            <div className="">
                <img className="w-24 h-24 object-cover" src={book.image} alt="" />
            </div>
            <div className="p-2 flex-1 flex flex-col">
                <h3 className="flex-1">{book.title}</h3>
                <div className="flex items-center">
                    <button onClick={onClickDecrease} className="bg-gray-500 w-8 h-8 text-white">
                        -
                    </button>
                    <p className="w-10 text-center">{quantity}</p>
                    <button onClick={onClickIncrease} className="bg-gray-500 w-8 h-8 text-white">
                        +
                    </button>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="flex-1">S/{book.price}</p>
                <div className="p-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-red-400 cursor-pointer"
                        onClick={onClickDelete}
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};
