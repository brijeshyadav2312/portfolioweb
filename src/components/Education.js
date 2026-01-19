import React from 'react'
import edu from '../Assets/mortarboard.png'

const Education = () => {
  return (
    <div className='about'>
            <p data-aos="fade-up"><img src={edu} alt='degree'/>Education</p><br/>
            <div data-aos="fade-up" className='education'>
              <span className='collage'>
                <span>Dr AITH, Kanpur</span>
                <span>B.Tech in Information Technology</span>
                <span><span>Percentage-79%</span><span>2018-2022</span></span>
              </span>
              <span className='collage'>
                <span>Aditya Birla Intermediate College, Renukoot</span>
                <span>Intermediate (UP BOARD)</span>
                <span><span>Percentage-72%</span><span>2016-2017</span></span>
              </span>
              <span className='collage'>
                <span>Aditya Birla Intermediate College, Renukoot</span>
                <span>High School (UP BOARD)</span>
                <span><span>Percentage-71%</span><span>2014-2015</span></span>
              </span>
        </div>
    </div>
  )
}

export default Education
