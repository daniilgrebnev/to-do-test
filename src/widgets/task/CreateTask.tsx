'use client'
import { useModalStore } from '@/store/zustand.store'
import CreateTaskModal from './CreateTaskModal'

const CreateTodo = () => {
	const { isOpen, openModal } = useModalStore()
	return (
		<div className='my-10'>
			{isOpen && <CreateTaskModal />}
			<div
				onClick={openModal}
				className=' text-4xl py-3 cursor-pointer hover:w-1/2 hover:shadow-lg w-[45%] transition-all mx-auto  text-center  text-white rounded-full  bg-emerald-600'
			>
				+ Добавить задачу
			</div>
		</div>
	)
}

export default CreateTodo
