// store.ts
import { configureStore } from '@reduxjs/toolkit'
import todoReducer, { fetchTodos } from './slices/todo-slice'

const store = configureStore({
	reducer: {
		todo: todoReducer,
	},
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// Загрузка todos при инициализации
store.dispatch(fetchTodos())

export default store
