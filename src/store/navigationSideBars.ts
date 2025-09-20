import { create } from 'zustand'

type NavDrawerState = {
	collapsed: boolean
	setCollapsed: (value: boolean) => void
	floating: boolean
	setFloating: (value: boolean) => void
	floatingOnly: boolean
	setFloatingOnly: (value: boolean) => void
}

export const navigationSidebarsState = create<NavDrawerState>((set) => ({
	collapsed: false,
	setCollapsed: (value) => set({ collapsed: value }),
	floating: false,
	setFloating: (value) => set({ floating: value }),
	floatingOnly: false,
	setFloatingOnly: (value) => set({ floatingOnly: value }),
}))
