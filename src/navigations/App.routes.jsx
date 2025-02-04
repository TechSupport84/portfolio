import React from 'react'
import { BrowserRouter as  Router, Routes ,Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NavPage from '../components/NavPage'
import About from '../pages/About'
import SkillsPages from '../pages/SkillsPages'
import Project from '../pages/Project'
import Contacts from '../pages/Contacts'
import Introduction from '../components/Introduction'
import WorkPages from '../pages/WorkPages'

function AppRoute() {
  return (
     <Router>
        <NavPage/>
        <Routes>
            <Route path='/' element ={<HomePage/>}/>
            <Route path='/about' element ={<Introduction/>}/>
            <Route path='/skills' element ={<SkillsPages/>}/>
            <Route path='/project' element ={<Project/>}/>
            <Route path='/Contact' element ={<Contacts/>}/>
            <Route path='/work' element ={<WorkPages/>}/>

        </Routes>
     </Router>
  )
}

export default AppRoute
