'use client'
import store from '@/store/store'
import { Provider } from 'react-redux'
import Header from './Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Provider store={store}>
				<Header />

				<main className='pt-24'>{children}</main>
			</Provider>
		</div>
	)
}

export default Layout
