import { create } from 'zustand';

interface StoreState {
	isActive: boolean;
	setIsActive: () => void;
}

export const useStore = create<StoreState>((set) => ({
	isActive: true,
	setIsActive: () => set((state) => ({ isActive: !state.isActive })),
}));
