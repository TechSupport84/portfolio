import React from 'react'
import "../styles/HomePage.css"
import Introduction from '../components/Introduction'
import About from './About'
import Services from './Services'
import SkillsPages from './SkillsPages'
import Project from './Project'
import WorkPages from './WorkPages'
import Testimony from './Testimony'
import Contacts from './Contacts'
import FooterPage from './FooterPage'

function HomePage() {
  return (
    <div className='home-container pt-16'>
     <Introduction/>
      <About/>
      <Services/>
      <SkillsPages/>
      <Project/>
      <WorkPages/>
      <Testimony/>

      <Contacts/>
      <FooterPage/>
    </div>
  )
}

export default HomePage
