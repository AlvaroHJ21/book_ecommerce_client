import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { BagItem } from '../domain/models/BagItem';

interface StoreState {
    bag: BagItem[];
    total: number;
    isModalOpen: boolean;
    addToBag: (item: BagItem) => void;
    openModal: () => void;
    closeModal: () => void;
    toggleModal: () => void
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
        openModal: () => set({
            isModalOpen: true
        }),
        closeModal: () => set({
            isModalOpen: false
        }),
        toggleModal: () => set((state: StoreState)=>({
            isModalOpen: !state.isModalOpen
        }))
        // increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
        // removeAllBears: () => set({ bears: 0 }),
    }))
);
