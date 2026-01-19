import React from 'react'
import { Projects } from './Projects';
import {Laptop} from 'react-bootstrap-icons';

const ProjectComponent = () => {
  return (
    <div className='about'>
          <p data-aos="fade-left"><Laptop/>Projects</p><br/>
          <div className='projectContainer'>
            {Projects.map((ele,idx) => {
              return(
                <div data-aos="zoom-in-up"> 
                <a href={ele.Link} target='_ '><div key={idx}  className='backgroundProject'  style={{backgroundImage: `url(${ele.source})`}}>
                  <div className='projectDetails'>
                    <span>
                      <p>{ele.Title}</p>
                      <p>{ele.Description}</p>
                      <p>{ele.TechUsed}</p>
                    </span>
                  </div>
                </div></a>
                </div>
              )
            })
            }
        </div>
    </div>
  )
}

export default ProjectComponent
