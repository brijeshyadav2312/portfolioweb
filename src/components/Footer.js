import React from 'react'
import { CCircle, EnvelopeFill, Github, Instagram, Linkedin} from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className='footer'>
        <p  data-aos="fade-up" data-aos-anchor-placement="center-bottom"><CCircle/>2022 Brijesh Yadav</p>
        <div  data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='socialMedia'>
        <a href='https://github.com/brijeshyadav2312' target='_ '><Github/></a>
        <a href='https://www.instagram.com/brijesh_231/' target='_ '><Instagram/></a>
        <a href='https://www.linkedin.com/in/brijesh-yadav-78610619b' target='_ '><Linkedin/></a>
        <a href='mailto:brijeshrnq2312@gmail.com' target='_ '><EnvelopeFill/></a></div>
    </div>
  )
}

export default Footer
