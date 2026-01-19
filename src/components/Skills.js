import React,{useEffect} from 'react'
import MySkills from './MySkills'
import ProjectComponent from './ProjectComponent'
import Footer from './Footer';
import "aos/dist/aos.css"
import AOS from 'aos';

const Skills = () => {
  useEffect(() => {
    AOS.init({duration:2000});
  }, [])
  return (
    <div className='main skillSection'>
        <div className='skillsTab'>
          <MySkills/>
          <br/>
          <ProjectComponent/>
          <Footer/>
        </div>
    </div>
  )
}

export default Skills
