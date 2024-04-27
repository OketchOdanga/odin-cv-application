// lib imports
import { useState } from 'react'

// Components
import { Preview } from './Preview'
import { Form } from './Form'

export const Main = () => {
  const [ userData, setUserData ] = useState({
    first_name : '',
    last_name : '',
    email : '',
    phone : '',
    education : [],
    workExperience : [],
  })

  return (
    <div className='main'>
      <Form user={userData} updateUser={setUserData}/>
      <Preview user={userData} updateUser={setUserData}/>
    </div>
  )
}