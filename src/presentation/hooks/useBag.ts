import { useStore } from '../../store/store';
import { BagItem } from '../../domain/models/BagItem';
import { useMemo } from 'react';
import { delay } from '../utils/index';

export const useBag = () => {

    const {
        bag,
        isModalOpen,
        addToBag,
        updateItem,
        deleteItem,
        clearBag,
        closeModal,
        openModal,
        toggleModal,
    } = useStore((state) => state);

    const total = useMemo(() => {
        return bag.reduce((ac, item) => ac + item.book.price * item.quantity, 0);
    }, [bag]);

    function handleAddToBag(item: BagItem) {
        //TODO: más logica
        addToBag(item);
    }

    function handleIncreaseItemQuantity(item: BagItem) {
        updateItem(item.book.id, item.quantity + 1);
    }
    function handleDecreaseItemQuantity(item: BagItem) {
        updateItem(item.book.id, item.quantity - 1);
    }

    function handleDeleteItemFromBag(id: number) {
        deleteItem(id);
    }

    async function startSendOrder(){
        console.log("Enviando pedido");
        console.log({ items: bag, total });

        await delay(1);

        clearBag();
        closeModal();
        
        
        // return new Promise(resolve => setTimeout(resolve, 3000));
    }

    return {
        bag,
        total,
        isModalOpen,
        closeModal,
        openModal,
        toggleModal,
        handleAddToBag,
        handleIncreaseItemQuantity,
        handleDecreaseItemQuantity,
        handleDeleteItemFromBag,
        startSendOrder,
    };
};
