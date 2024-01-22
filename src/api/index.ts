import axios, { AxiosResponse } from 'axios'

const baseUrl = 'http://localhost:8080'

export interface ITodoData {
	title: string
	text: string
	status: string
}

// Получение всех задач
const getAllTodos = async (): Promise<ITodoData[]> => {
	try {
		const response: AxiosResponse<ITodoData[]> = await axios.get(
			`${baseUrl}/todos`
		)
		console.debug(response.data)

		return response.data
	} catch (error) {
		console.error('Error fetching todos', error)
		throw error
	}
}

// Получение задачи по идентификатору
const getTodoById = async (id: number): Promise<ITodoData> => {
	try {
		const response: AxiosResponse<ITodoData> = await axios.get(
			`${baseUrl}/todos/${id}`
		)
		return response.data
	} catch (error) {
		console.error('Error fetching todo', error)
		throw error
	}
}

// Добавление новой задачи
const addTodo = async (newTodo: Partial<ITodoData>): Promise<ITodoData> => {
	try {
		const response: AxiosResponse<ITodoData> = await axios.post(
			`${baseUrl}/todos`,
			newTodo
		)
		return response.data
	} catch (error) {
		console.error('Error creating todo', error)
		throw error
	}
}

// Обновление задачи по идентификатору
const putTodo = async (
	id: number,
	updatedTodo: Partial<ITodoData>
): Promise<ITodoData> => {
	try {
		const response: AxiosResponse<ITodoData> = await axios.put(
			`${baseUrl}/todos/${id}`,
			updatedTodo
		)
		return response.data
	} catch (error) {
		console.error('Error updating todo', error)
		throw error
	}
}

// Удаление задачи по идентификатору
const deleteTodo = async (id: number): Promise<void> => {
	try {
		await axios.delete(`${baseUrl}/todos/${id}`)
	} catch (error) {
		console.error('Error deleting todo', error)
		throw error
	}
}

export { addTodo, deleteTodo, getAllTodos, getTodoById, putTodo }
