import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { BagItem } from '../domain/models/BagItem';

interface StoreState {
    bag: BagItem[];
    total: number;
    isModalOpen: boolean;
    addToBag: (item: BagItem) => void;
    updateItem: (id: number, quantity: number) => void;
    deleteItem: (id: number) => void;
    clearBag: () => void;
    openModal: () => void;
    closeModal: () => void;
    toggleModal: () => void;
}

export const useStore = create<StoreState>()(
    devtools((set) => ({
        bag: [],
        total: 0,
        isModalOpen: false,
        addToBag: (item: BagItem) =>
            set((state: StoreState) => ({
                bag: [...state.bag, item],
            })),

        updateItem: (id: number, quantity: number) =>
            set((state: StoreState) => ({
                bag: state.bag.map((item) => (item.book.id === id ? { ...item, quantity } : item)),
            })),

        deleteItem: (id: number) =>
            set((state) => ({
                bag: state.bag.filter((item) => item.book.id !== id),
            })),

        clearBag: () =>
            set(() => ({
                bag: [],
            })),

        openModal: () =>
            set({
                isModalOpen: true,
            }),
        closeModal: () =>
            set({
                isModalOpen: false,
            }),
        toggleModal: () =>
            set((state: StoreState) => ({
                isModalOpen: !state.isModalOpen,
            })),
        // increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
        // removeAllBears: () => set({ bears: 0 }),
    }))
);
