import { ITodoData, getAllTodos } from '@/api'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface ITodoCreateData extends ITodoData {
	id?: string
}

export const fetchTodosAsync = createAsyncThunk(
	'todos/fetchTodos',
	async () => {
		const dataFromApi: ITodoCreateData[] = await getAllTodos()
		console.debug(dataFromApi)

		return dataFromApi.map(todoData => ({
			id: todoData.id,
			title: todoData.title,
			text: todoData.text,
			status: todoData.status,
		}))
	}
)
