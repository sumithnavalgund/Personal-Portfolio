import React from 'react'
import NavBar from '../components/NavBar'
import AboutSec from '../components/AboutSec'
import NameRot from '../components/NameRot'
import AboutMe from '../components/AboutMe'
import SkillSec from '../components/SkillSec'
import ProjectSec from '../components/ProjectSec'
import ProjSec from '../components/ProjSec'
import Contact from '../components/Contact'


const Home = () => {
  return (
    <div>
      <NavBar/>
      <AboutSec/>
      <NameRot/>
      <AboutMe/>
      <SkillSec/>
      <ProjectSec/>
      <ProjSec/>
      <Contact/>
    </div>
  )
}

export default Home
