import { putTodo } from '@/api'
import { useTaskView } from '@/store/zustand.store'
import { useEffect, useState } from 'react'

const TaskFullWidget = () => {
	const { closeDemoView, activeArray } = useTaskView()
	const [text, setText] = useState<string>()
	const [title, setTitle] = useState<string>()
	useEffect(() => {
		setText(activeArray?.text || 'null')
		setTitle(activeArray?.title || 'null')
	}, [activeArray?.title, activeArray?.text])
	const [updateMode, setUpdateMode] = useState(false)

	async function updateHandler() {
		setUpdateMode(false)
		const item = { text, title }
		if (activeArray?.id) {
			const result = await putTodo(activeArray?.id, item)
			// Обработка результата, если необходимо
			console.log('Результат сохранения:', result)
		}
		location.reload()
	}
	return (
		<div className='overflow-hidden relative w-full h-full p-4'>
			<div
				onClick={closeDemoView}
				className='absolute left-2 top-2 cursor-pointer'
			>
				Закрыть
			</div>
			<div className='absolute right-2 top-2 cursor-pointer'>
				{updateMode ? (
					<p onClick={() => updateHandler()}>Сохранить</p>
				) : (
					<p onClick={() => setUpdateMode(true)}>Изменить</p>
				)}
			</div>
			<div className='mt-10 relative'>
				<div className='mb-10'>
					{updateMode ? (
						<textarea
							className='text-6xl font-bold overflow-y-hidden w-full h-auto'
							value={title}
							onChange={e => setTitle(e.target.value)}
						></textarea>
					) : (
						<div className='text-6xl font-bold  h-auto'>{title}</div>
					)}
				</div>
				<div className='mb-10'>
					{updateMode ? (
						<textarea
							className='text-lg  overflow-y-hidden w-full h-auto'
							value={text}
							onChange={e => setText(e.target.value)}
						></textarea>
					) : (
						<div className='text-lg   overflow-y-hidden w-fullh-auto'>
							{text}
						</div>
					)}
				</div>
				<div className=''></div>
			</div>
		</div>
	)
}

export default TaskFullWidget
