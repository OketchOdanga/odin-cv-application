import React from 'react'
import ReactDOM from 'react-dom/client'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import './index.css'
import WorkExperience from './WorkExperience'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonalInfo/>
    <Education/>
    <WorkExperience/>
  </React.StrictMode>,
)
