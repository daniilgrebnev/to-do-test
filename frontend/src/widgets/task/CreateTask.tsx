'use client'
import { useModalStore } from '@/store/zustand.store'
import CreateTaskModal from './CreateTaskModal'

const CreateTodo = () => {
	const { isOpen, openModal } = useModalStore()
	return (
		<div className='w-full h-full flex items-center mx-auto justify-center transition-all duration-500'>
			{isOpen && <CreateTaskModal />}
			<div
				onClick={openModal}
				className='w-10/12 h-10/12 mx-auto py-10 my-6 rounded-lg text-6xl border-4 text-gray-600 hover:bg-slate-200 hover:shadow-lg transition-all cursor-pointer  border-gray-600 font-bold flex flex-col items-center justify-center text-center'
			>
				+ <span className='text-lg font-light'> Новая задача</span>
			</div>
		</div>
	)
}

export default CreateTodo
