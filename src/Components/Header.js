import React from 'react'
import { Navbar, IconButton } from '@material-tailwind/react'
import lawicon from '../Assets/law-icon.png'
const Header = ({ openDrawer }) => {
  return (
    <Navbar className='sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <div className='flex items-center'>
          {' '}
          <img src={lawicon} alt='brand' className='w-[50px] h-[40px]' />
          <div className='h-[50px] w-[3px] bg-indigo-900 mx-2'></div>
          <p className='text-3xl font-semibold uppercase'>Law firm</p>
        </div>

        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={openDrawer}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </IconButton>
      </div>
    </Navbar>
  )
}

export default Header
