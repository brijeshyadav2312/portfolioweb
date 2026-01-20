import React,{useEffect, useState} from 'react'
import { InfoCircleFill } from 'react-bootstrap-icons'
import Footer from './Footer'
import "aos/dist/aos.css"
import AOS from 'aos';

const About = () => {

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    message:""
  });

  const [err, setErr] = useState("");
  const [success,setSuccess] = useState("");

  useEffect(() => {
    AOS.init({duration:2000});
  }, [])

  // handle input change
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

const sendMail = async (e) => {
  e.preventDefault();
  setErr("");
  setSuccess("");
  // let postURL = "http://localhost:5000/send-mail";
  let postURL = "https://mail-server-f1kt.onrender.com/send-mail";

  try {
    const res = await fetch(postURL,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }
    );

    const data = await res.json();

    if (!res.ok) {
      setErr(data.msg || "Something went wrong");
      return;
    }

    if (data.success) {
      setSuccess("Message sent successfully ✔");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    }

  } catch (error) {
    setErr("Server error. Try again later");
  }
};



  return (
    <div className='main aboutSec'>
      <div className='aboutSecstion'>
      <span className='aboutComp'>
        <InfoCircleFill/>
        <p data-aos="fade-up">About Me</p><br/>
      </span>

      <div data-aos="fade-up">
      Frontend Developer with 2.5+ years of experience...
      </div>

      <Footer/>

      <div className='getInTouch'>
        <span className='getInTouchHeader' data-aos="fade-right">
          <p>GET IN TOUCH</p>
          <span>Say Hi! or contact me on social media</span>
        </span>

        <div className='formItems'>
          <form onSubmit={sendMail}>

            <div>
              <label>Name*</label>
              <input 
                type='text'
                name='name'
                value={formData.name}
                placeholder='Your Name'
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Email*</label>
              <input 
                type='text'
                name='email'
                value={formData.email}
                placeholder='Your Email'
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Phone</label>
              <input 
                type='text'
                name='phone'
                value={formData.phone}
                placeholder='Your Phone Number'
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Message*</label>
              <textarea 
                name='message'
                value={formData.message}
                placeholder='Hi! Drop your message here'
                onChange={handleChange}
              />
            </div>

            {/* ERROR */}
            {err && <p style={{color:'red',fontSize:'0.8rem',textAlign:'center'}}>{err}</p>}

            {/* SUCCESS */}
            {success && <p style={{color:'green',fontSize:'0.8rem',textAlign:'center'}}>{success}</p>}

            <div style={{display:'flex',justifyContent:'center'}}>
              <button type='submit'>Submit</button>
            </div>

          </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About;
