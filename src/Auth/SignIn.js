import { Button, Input } from '@material-tailwind/react'
import React from 'react'

import { useNavigate } from 'react-router-dom'
const SignIn = () => {
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/home')
  }
  return (
    <div className='min-h-screen flex justify-center items-center bg-silver'>
      <div className='p-8 rounded-xl shadow-xl bg-white w-[450px] mx-2'>
        <p className='text-xl font-bold my-3'>Sign In</p>
        <form className='flex flex-col gap-4' onSubmit={handleLogin}>
          <Input name='email' label='Enter Email' type='email' size='lg' />
          <Input
            name='password'
            label='Enter Password'
            type='password'
            size='lg'
          />
          <Button type='submit'>Login</Button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
