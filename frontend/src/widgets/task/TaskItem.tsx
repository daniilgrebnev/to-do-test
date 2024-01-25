'use client'
import { deleteTodo, putTodo } from '@/api'
import { useTaskView } from '@/store/zustand.store'
import { useState } from 'react'
import { statusLib } from './TaskWidget'

interface ITask {
	id: number
	title: string
	text: string
	status: string
	createdAt?: string
}

const colorsLib = (typeNumber: number) => {
	switch (typeNumber) {
		case 0:
			return '#374151'
		case 1:
			return '#ca8a04'
		case 2:
			return '#059669'
	}
}

const TaskItem = ({ title, text, status, id, createdAt }: ITask) => {
	const statusArr = statusLib(status)
	const [isDeleted, setIsDeleted] = useState(false)

	const [statusHook, setStatusHook] = useState(statusLib(status).num)
	const updateStatusHandler = (id: number, newStatus: string) => {
		setStatusHook(Number(newStatus))

		function getValidStatus(newStatus: string) {
			switch (newStatus) {
				case '0':
					return 'wait'
				case '1':
					return 'inProgress'
				case '2':
					return 'completed'
				default:
					return 'errored'
			}
		}

		const status = getValidStatus(newStatus)

		const updateTodo = { status: status }
		putTodo(id, updateTodo)
	}
	const color = colorsLib(statusHook)
	const itemData = { title, status, text, id, createdAt }
	// Delete
	const removeItem = async (id: number) => {
		setIsDeleted(true)
		await deleteTodo(id)
	}

	const { demoView, openDemoView, closeDemoView } = useTaskView()

	return (
		<div
			className={`${
				isDeleted && 'deleted-item'
			} transition-all duration-500  h-48`}
		>
			<div
				style={{
					borderColor: color,
				}}
				className=' relative text-black h-48 overflow-hidden w-full mx-auto my-6  border-4   rounded-lg cursor-pointer transition-all hover:shadow-lg border-teal-700 '
			>
				<div className='flex flex-col items-start justify-between'>
					<div
						onClick={() => openDemoView(itemData)}
						className='text-2xl  hover:bg-gray-50 font-semibold pl-8 py-3'
					>
						{title}
					</div>
					<div className='relative h-full w-full flex items-center justify-start py-5 px-7'>
						{/* <div
						style={{ background: color }}
						className=' flex items-center justify-center w-0.5 text-center   absolute b h-full top-0 left-0 '
					></div> */}
						<div
							style={{ background: color }}
							className=' text-white text-left py-1 px-4 rounded-lg'
						>
							<select
								className='bg-inherit focus-within:outline-0'
								value={statusHook}
								onChange={e => updateStatusHandler(id, e.target.value)}
							>
								<option className='bg-[#374151]' value={0}>
									Ожидает
								</option>
								<option className='bg-[#ca8a04]' value={1}>
									В работе
								</option>
								<option className='bg-[#059669]' value={2}>
									Завершен
								</option>
							</select>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-between absolute bottom-0 w-full'>
					<div className='relative h-full w-full flex items-center justify-center p-3'>
						{/* <div
							style={{ background: color }}
							className=' flex  items-center justify-center w-0.5 text-center   absolute b h-full top-0 left-0 '
						></div> */}
						Изменить
					</div>
					<div
						onClick={() => removeItem(Number(id))}
						className='relative h-full text-red-400 w-full flex items-center justify-center p-3'
					>
						<div
							style={{ background: color }}
							className=' flex  items-center justify-center w-0.5 text-center absolute b h-full top-0 left-0'
						></div>
						Удалить
					</div>
				</div>
			</div>
		</div>
	)
}

export default TaskItem
