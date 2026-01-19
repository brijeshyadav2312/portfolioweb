import React, {useEffect} from 'react';
import { EnvelopeFill, Github, Instagram, Linkedin} from 'react-bootstrap-icons';
import AOS from 'aos';
import ProjectComponent from './ProjectComponent';
import MySkills from './MySkills';
import Education from './Education';
// import MyResume from './MyResume';
import Footer from './Footer';
import PersonalDetails from './PersonalDetails';
import "aos/dist/aos.css"

const Main = () => {
  useEffect(() => {
    AOS.init({duration:2000});
  }, [])
  return (
    <div className='main'>
      <div className='contents'>
        <div className='profile'></div>
        <div className='icons'>
            <a href='https://github.com/brijeshyadav2312' target='_ '><Github className='social' color='#545554' size={30}/></a>
            <a href='https://www.linkedin.com/in/brijesh-yadav-78610619b' target='_ '><Linkedin className='social' color='#545554' size={28}/></a>
            <a href='https://www.instagram.com/brijesh_231/' target='_ '><Instagram className='social' color='#545554' size={30}/></a>
            <a href='mailto:brijeshrnq2312@gmail.com' target='_ '><EnvelopeFill className='social' color='#545554' size={33}/></a>
        </div><br/><br/>
        <div  className='about'>
          <p data-aos="fade-up">About Me</p><br/>
          <div data-aos="fade-up">
          <span>Frontend Developer with 2.5+ years of experience working with jQuery, React, JavaScript, HTML5, and CSS3, Experienced in UI development, layout improvements, responsive design, and browser compatibility. I focus on writing clean code, understanding user requirements, and delivering stable frontend solutions. Comfortable working with cross-functional teams and interacting with clients to provide scalable and reliable features.</span></div>
        </div>
        {/* <div className='about'>
          <p data-aos="fade-up"><PhoneVibrate/>Hire Me</p><br/>
          <div data-aos="fade-up"><span data-aos="fade-up">Im open for collaborations. I can make for you great web designs, 
            portfolios, landing pages and much others at good price.</span></div>
        </div> */}
        <div className='about'>
          <PersonalDetails/>
          <Education/>
          <br></br>
          <MySkills/>
          <ProjectComponent/>
        </div>
        <Footer/>
      </div>
      
    </div>
  )
}

export default Main
