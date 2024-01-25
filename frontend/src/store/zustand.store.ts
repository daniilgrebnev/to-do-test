import { ITodoData } from '@/api'

import { create } from 'zustand'
interface ITodo extends ITodoData {
	id?: number
	createdAt?: string
	updatedAt?: string
}
interface ModalState {
	isOpen: boolean
	openModal: () => void
	closeModal: () => void
}

export const useModalStore = create<ModalState>(
	(set): ModalState => ({
		isOpen: false,
		openModal: () => set({ isOpen: true }),
		closeModal: () => set({ isOpen: false }),
	})
)

interface ITaskView {
	activeArray: ITodo | null
	demoView: boolean

	openDemoView: (item: ITodo) => void
	closeDemoView: () => void
}

export const useTaskView = create<ITaskView>(
	(set): ITaskView => ({
		activeArray: null,
		demoView: false,
		openDemoView: item => set({ demoView: true, activeArray: item }),
		closeDemoView: () => set({ demoView: false, activeArray: null }),
	})
)
