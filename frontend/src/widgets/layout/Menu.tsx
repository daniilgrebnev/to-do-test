import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Menu = () => {
	const pathname = usePathname()

	const menuItems = [
		{
			name: 'Главная',
			ref: '/',
		},
		{
			name: 'Kanban-доска',
			ref: '/kanban',
		},
	]
	const activeSplashWidth = (1 / menuItems.length) * 100 + '%'
	const widthOneItem = 100 / menuItems.length
	const leftRange =
		widthOneItem * menuItems.findIndex(i => i.ref == pathname) + '%'
	console.debug(leftRange)
	return (
		<div className='bg-emerald-800   text-white flex items-center justify-center gap-0  py-4 relative rounded-lg overflow-hidden'>
			<div
				style={{ width: activeSplashWidth, left: leftRange }}
				className=' absolute h-full flex items-center justify-center   transition-all opacity-30'
			>
				<div className='bg-emerald-500 mx-auto rounded-lg w-10/12 h-[3rem]'></div>
			</div>
			{menuItems.map((item, index) => (
				<Link
					href={item.ref}
					key={index}
					className='w-[10rem] block  py-1 z-10'
				>
					{item.name}
				</Link>
			))}
		</div>
	)
}

export default Menu
