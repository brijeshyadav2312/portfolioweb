import React from 'react'
import Typewriter from 'typewriter-effect';
import ParticleCanvas from './particleCanvas';

const Background = () => {
  return (
    <div className='background'>
      <ParticleCanvas/>
      <div className='backgroundTypewritter'>
        <span className='HeaderName'><Typewriter
          onInit={(typewriter) => {
              typewriter.typeString('Hi! I\'m Brijesh Yadav.')
              .start();
          }}
          /></span>
          <span className='HeaderTitle'><Typewriter
          options={{
              strings: ['UI Developer','Frontend Developer','Engineer'],
              autoStart: true,
              loop: true,
          }}
          /></span>
      </div>
    </div>
  )
}

export default Background;
