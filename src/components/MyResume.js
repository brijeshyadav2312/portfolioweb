import React from 'react'
import resume from '../Assets/brijesh_resume.pdf'
import {Download} from 'react-bootstrap-icons';

const MyResume = () => {
  return (
    <div className='downloadResume' data-aos="flip-up">
        <p>My Resume</p>
        <a href={resume} target='_blank' rel="noreferrer"><span>Open CV &nbsp;<Download/></span></a>
    </div>
  )
}

export default MyResume
