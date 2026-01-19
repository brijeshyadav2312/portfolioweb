import React,{useEffect, useState} from 'react'
import { InfoCircleFill } from 'react-bootstrap-icons'
import Footer from './Footer'
import emailjs from 'emailjs-com'
import "aos/dist/aos.css"
import AOS from 'aos';

const About = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [err, setErr] = useState("");

  const subMitHandler = () => {
    if(!name){
      setErr("Name should not be empty")
    }
    else if(!email){
      setErr("Email is mandatory")
    }
    else if(!message && message.length<16){
      setErr("message should be atleast 16 character")
    }
  }


  useEffect(() => {
    AOS.init({duration:2000});
  }, [])

  const sendMail = (e) =>{
    e.preventDefault();
    if(name!=="" && email!=="" && message!=="" && message.length>=16){
      emailjs.sendForm('service_gzrajtb','template_govhtvj',e.target,'02lLweULljXLnDwgm').then(alert('Message Send successfully')).catch(err => console.log(err));
      setErr("")
    }
  }


  return (
    <div className='main aboutSec'>
      <div className='aboutSecstion'>
      <span className='aboutComp'>
        <InfoCircleFill/>
        <p data-aos="fade-up">About Me</p><br/>
      </span>
      <div data-aos="fade-up">
      Frontend Developer with 2.5+ years of experience working with jQuery, React, JavaScript, HTML5, and CSS3, Experienced in UI development, layout improvements, responsive design, and browser compatibility. I focus on writing clean code, understanding user requirements, and delivering stable frontend solutions. Comfortable working with cross-functional teams and interacting with clients to provide scalable and reliable features.
      </div>
      {/* <div className='about'>
          <p data-aos="fade-up" style={{fontSize:'2rem'}}><PhoneVibrate/>Hire Me</p><br/>
          <div data-aos="fade-up"><span data-aos="fade-up">Im open for collaborations. I can make for you great web designs, 
            portfolios, landing pages and much others at good price.</span></div>
      </div> */}
      <Footer/>
      <div className='getInTouch'>
        <span className='getInTouchHeader' data-aos="fade-right">
          <p>GET IN TOUCH</p>
          <span>Say Hi! or contact me on social media</span>
        </span>
          <div className='formItems'>
            <form onSubmit={sendMail}>
              <div><label>Name*</label><input type='text'name='name' placeholder='Your Name' onChange={(e) => setName(e.target.value)}/></div>
              <div><label>Email*</label><input type='text' name='email' placeholder='Your Email' onChange={(e) => setEmail(e.target.value)}/></div>
              <div><label>Phone</label><input type='text' name='phone_number' placeholder='Your Phone Number'/></div>
              <div><label>Message*</label><textarea placeholder='Hii Drop Your Message Here' name='message' onChange={(e) => setMessage(e.target.value)}></textarea></div>
              <p style={{color:'red',fontSize:'0.8rem',textAlign:'center'}}>{err}</p>
              <div style={{display:'flex',justifyContent:'center',marginRight:'5.5rem', width:'100%'}}><button type='submit' onClick={subMitHandler}>Submit</button></div>
            </form>
          </div>
      </div>
      </div>
    </div>
  )
}

export default About
