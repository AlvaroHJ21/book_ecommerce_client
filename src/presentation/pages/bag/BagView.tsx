import styles from './BagView.module.css';
import { BagItemCard } from './components/BagItemCard';
import { useBag } from '../../hooks/useBag';
import { useToast } from '../../hooks/useToast';

export const BagView = () => {
    const {
        bag,
        total,
        isModalOpen,
        closeModal,
        handleIncreaseItemQuantity,
        handleDecreaseItemQuantity,
        handleDeleteItemFromBag,
        startSendOrder
    } = useBag();

    const { showToastPromise } = useToast();

    async function handleClickSendOrder() {
        showToastPromise(startSendOrder(), 'Generando orden...', 'Orden generada 👌');
    }

    if (bag.length === 0)
        return (
            <div className={`${styles.bag} ${isModalOpen ? styles.open : ''} flex flex-col`}>
                <div className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 absolute m-4 cursor-pointer"
                        onClick={closeModal}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>

                    <h2 className="text-center my-4 uppercase">No tienes items agregados</h2>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-20 h-20 text-gray-400"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        );

    return (
        <div className={`${styles.bag} ${isModalOpen ? styles.open : ''} flex flex-col`}>
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute m-4 cursor-pointer"
                    onClick={closeModal}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                <h2 className="text-center my-4 uppercase">Items en bolsa</h2>
            </div>
            <ul className="flex-1 overflow-y-auto">
                {bag.map((item) => (
                    <BagItemCard
                        key={item.book.id}
                        item={item}
                        onClickIncrease={() => handleIncreaseItemQuantity(item)}
                        onClickDecrease={() => handleDecreaseItemQuantity(item)}
                        onClickDelete={() => handleDeleteItemFromBag(item.book.id)}
                    />
                ))}
            </ul>
            <div className="m-4">
                <p className="text-xl mb-2">Total: S/{total}</p>
                <button
                    onClick={handleClickSendOrder}
                    className="uppercase w-full text-xs bg-primary text-white h-10"
                >
                    Realizar pedido
                </button>
            </div>
        </div>
    );
};
