import React from 'react'
import { Calendar2Event, EnvelopeFill, GeoAltFill, PersonBadge, TelephoneFill} from 'react-bootstrap-icons';
const PersonalDetails = () => {
  return (
    <div className='about'>
      <p data-aos="fade-up"><PersonBadge/>Personal Details</p><br/>
          <div data-aos="fade-up"><span className='pdetails'>
            <p><span>Full Name</span>Brijesh Kumar Yadav</p>
            <p><span><Calendar2Event/>Date of Birth</span>05-03-1998</p>
            <p><span><GeoAltFill/>Address</span>Renukoot,Sonbhadra</p>
            <p><span><EnvelopeFill/>Email</span>brijeshrnq2312@gmail.com</p>
            <p><span><TelephoneFill/>Phone no</span>7355214201</p>
        </span></div>
    </div>
  )
}

export default PersonalDetails
