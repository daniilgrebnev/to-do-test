'use client'

import { addTodo } from '@/api'
import { useModalStore } from '@/store/zustand.store'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const CreateTaskModal = () => {
	const dispatch = useDispatch()
	const { closeModal } = useModalStore()

	const [title, setTitle] = useState<string>('')
	const [text, setText] = useState<string>('')
	const [isError, setIsError] = useState(false)

	const formHandler = (title: string, text: string) => {
		const item = { title, text, status: 'wait' }
		if (!title || !text) {
			return setIsError(true)
		} else {
			addTodo(item)
			setIsError(false)
			location.reload()
		}
	}

	return (
		<div className='absolute w-screen h-screen bg-black bg-opacity-80 top-0 left-0 z-40 flex items-center justify-center'>
			{isError && (
				<div className='absolute error-animate mx-auto w-1/3 h-16 top-5 rounded-lg  flex items-center justify-center bg-red-600 text-center text-white'>
					Форма не заполнена
				</div>
			)}
			<div className='bg-white h-50% text-left p-4 px-8 rounded-lg'>
				<h3 className='text-4xl mb-10 text-center'>Создание задачи</h3>

				<div className='mb-3'>
					<h3>Заголовок</h3>
					<input
						className='px-2 py-2 my-2 rounded-lg text-xl transition-all outline focus-within:outline-4 outline-emerald-800 w-full'
						type='text'
						placeholder='Заголовок задачи'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</div>

				<h3>Текст</h3>
				<textarea
					className='px-2 py-2 my-2 rounded-lg text-xl transition-all outline focus-within:outline-4 outline-emerald-800 w-full'
					rows={10}
					cols={100}
					value={text}
					onChange={e => setText(e.target.value)}
					placeholder='Текст задачи'
				/>

				<div
					onClick={() => formHandler(title, text)}
					className='px-6 w-1/4 text-center py-2 bg-emerald-800 text-white rounded-lg cursor-pointer'
				>
					Создать
				</div>
			</div>
		</div>
	)
}

export default CreateTaskModal
