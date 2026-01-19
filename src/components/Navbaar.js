import React from "react";
import logo from '../Assets/myLogo.png'
import { NavLink,Link } from "react-router-dom";

const Navbaar = () => {
    return(
        <div>
            <div className="nav">
                <Link to={'/'}><img src={logo} alt='mylogo' width='40px'/></Link>
                <span>
                    <NavLink to={'/'} style={({ isActive }) => ({ color: !isActive ? '#cbc5c5' : 'white' })}><span>Home</span></NavLink>&nbsp;&nbsp;&nbsp;
                    <NavLink to={'/About'} style={({ isActive }) => ({ color: !isActive ? '#cbc5c5' : 'white' })}><span>About</span></NavLink>&nbsp;&nbsp;&nbsp;
                    <NavLink to={'/Skills'} style={({ isActive }) => ({ color: !isActive ? '#cbc5c5' : 'white' })}><span>Skill</span></NavLink>
                </span>
            </div>
        </div>
    )
}
export default Navbaar;