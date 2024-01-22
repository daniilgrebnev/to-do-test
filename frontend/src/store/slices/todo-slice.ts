// todo-slice.ts
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface Todo {
	id?: number
	title: string
	text: string
	status: string
}

interface TodoState {
	dataStoreArray: Todo[]
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: TodoState = {
	dataStoreArray: [],
	loading: 'idle',
}

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
	const response = await axios.get<Todo[]>(`localhost:8080/todos`)
	return response.data
})

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		pushToStore: (state, action: PayloadAction<Todo | Todo[]>) => {
			state.dataStoreArray = Array.isArray(action.payload)
				? [...state.dataStoreArray, ...action.payload]
				: [...state.dataStoreArray, action.payload]
			console.log(state.dataStoreArray)
		},
		removeFromStore: (state, action: PayloadAction<number>) => {
			state.dataStoreArray = state.dataStoreArray.filter(
				item => item.id !== action.payload
			)
		},
		updateInStore: (
			state,
			action: PayloadAction<{ id: number; updatedTodo: Partial<Todo> }>
		) => {
			state.dataStoreArray = state.dataStoreArray.map(item =>
				item.id === action.payload.id
					? { ...item, ...action.payload.updatedTodo }
					: item
			)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTodos.pending, state => {
				state.loading = 'pending'
			})
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.loading = 'succeeded'
				state.dataStoreArray = action.payload
			})
			.addCase(fetchTodos.rejected, state => {
				state.loading = 'failed'
			})
	},
})

export const { pushToStore, removeFromStore, updateInStore } = todoSlice.actions

export default todoSlice.reducer
