import { create } from 'zustand';

interface StoreState {
	isActive: number;
	setIsActive: (num: number) => void;
	drawerOpen: boolean;
	setDrawerOpen: () => void;
}

export const useStore = create<StoreState>((set) => ({
	isActive: -1,
	setIsActive: (num: number) =>
		set((state) => ({ isActive: state.isActive == num ? -1 : num })),
	drawerOpen: false,
	setDrawerOpen: () => set((state) => ({ drawerOpen: !state.drawerOpen })),
}));
