'use client'

import { getAllTodos } from '@/api'
import { useTaskView } from '@/store/zustand.store'
import { useEffect, useState } from 'react'
import CreateTodo from './CreateTask'
import TaskFullWidget from './TaskFullWidget'
import TaskItem from './TaskItem'

export const statusLib = (status: string) => {
	switch (status) {
		case 'wait':
			return { num: 0, name: 'Ожидается' }
		case 'inProgress':
			return { num: 1, name: 'В прогрессе' }
		case 'completed':
			return { num: 2, name: 'Завершено' }
		default:
			return { num: 3, name: 'Ошибка присвоение типа' }
	}
}

interface ITodo {
	id?: number
	title: string
	text: string
	status: string
	createdAt?: string
	updatedAt?: string
}

const TaskWidget = () => {
	const [data, setData] = useState<ITodo[]>()

	useEffect(() => {
		async function name() {
			setData(await getAllTodos())
		}

		name()
	}, [])

	data?.sort(
		(a, b) =>
			(new Date(b.createdAt as string) as any) -
			(new Date(a.createdAt as string) as any)
	)
	const { demoView } = useTaskView()

	return (
		<div className=''>
			<div
				style={{ width: demoView ? '30%' : '0%' }}
				className='transition-all  absolute top-0 right-0 h-screen bg-slate-100 pt-24'
			>
				<TaskFullWidget />
			</div>
			<div
				style={{ width: demoView ? '80%' : '100%' }}
				className='w-full transition-all'
			>
				<div className='text-center text-5xl py-10 text-semibold'>Задачи</div>
				<div className='mx-auto text-center'>
					<CreateTodo />
				</div>
				<div className='transition-all overflow-y-auto max-h-[50dvh] last:mb-20'>
					{data &&
						data.map(
							item =>
								item.id !== undefined && (
									<TaskItem
										key={item.id}
										title={item.title}
										status={item.status}
										text={item.text}
										id={item.id}
									/>
								)
						)}
				</div>
			</div>
		</div>
	)
}

export default TaskWidget
