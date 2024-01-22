const Header = () => {
	return (
		<header className='bg-emerald-800 z-40 w-full p-4 fixed h-24'>
			<div className='w-full h-full flex items-end justify-center text-white text-6xl font-bold text-center align-sup'>
				Todo-App{' '}
				<a
					className='text-sm font-thin hover:underline'
					href='https://github.com/daniilgrebnev'
				>
					by Daniil Grebnev
				</a>
			</div>
		</header>
	)
}

export default Header
