import React from 'react'
import {Laptop} from 'react-bootstrap-icons';

const MySkills = () => {
  return (
    <div className={['about' ,'aboutskill'].join(" ")}>
          <p data-aos="fade-right" ><Laptop/>My Skills</p><br/><br/>
          <div data-aos="fade-right" className='skills'>
            <span>
              <label for="jQuery">jQuery</label>
              <progress id="jQuery" value="73" max="100"> 32% </progress>
            </span>
            <span>
              <label for="react">REACT</label>
              <progress id="react" value="66" max="100"> 32% </progress>
            </span>
            <span>
              <label for="js">JS</label>
              <progress id="js" value="69" max="100"> 32% </progress>
            </span>
            <span>
              <label for="java">JAVA</label>
              <progress id="java" value="60" max="100"> 32% </progress>
            </span>
            <span>
              <label for="html">HTML</label>
              <progress id="html" value="74" max="100"> 32% </progress>
            </span>
            <span>
              <label for="css">CSS</label>
              <progress id="css" value="65" max="100"> 32% </progress>
            </span>
            <span>
              <label for="sql">SQL</label>
              <progress id="css" value="59" max="100"> 32% </progress>
            </span>
            <span>
              <label for="ds">Data Structure</label>
              <progress id="ds" value="70" max="100"> 32% </progress>
            </span>
        </div>
    </div>
  )
}

export default MySkills
