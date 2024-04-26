// lib imports
import { useState } from 'react'

// Components
import { Preview } from './Preview'
import { Form } from './Form'

export const Main = () => {
  const [ userData, setUserData ] = useState({
    name : '',
    email : '',
    phone : '',
    education : [],
    workExperience : [],
  })

  return (
    <div className='flex flex-col laptop:flex-row gap-4 items-center justify-evenly m-auto p-4 text-left'>
      <Form user={userData} updateUser={setUserData}/>
      <Preview user={userData} updateUser={setUserData}/>
    </div>
  )
}