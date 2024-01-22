import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

// Типизированный useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Типизированный useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
