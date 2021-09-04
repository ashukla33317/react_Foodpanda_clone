
import React from 'react'
import logo from '../images/logo.png'


const Footer = ()=>{
    return (
        <div id="footer">
            <div id="footer_logo">
                <img src={logo} alt="logo" />
                <p> &copy; 2021</p>
            </div>
        <div id="footer_link_div">
            <ul>
                <li>
                    <a href="/"><i className="fa fa-facebook"></i></a>
                </li>
                <li>
                    <a href="/"><i className="fa fa-linkedin"></i></a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/">Imprint</a>
                </li>
                <li>
                    <a href="/">Security</a>
                </li>
                <li>
                    <a href="/">Privacy</a>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default Footer;