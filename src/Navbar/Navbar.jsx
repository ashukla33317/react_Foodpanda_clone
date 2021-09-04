import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../images/logo.png';


const Navbar = () =>{

    let id=100;


    const navbar_links = [
        {
            link:'About',
            path:'/about'
        },
        {
            link:'Careers',
            path:'/careers'
        },
        {
            link:'Press',
            path:'/press'
        },
        {
            link : 'Login',
            path : '/login'
        },
        {
            link : 'Sign up',
            path : '/signup'
        }
    ];

    return (
        <div id="navbar">
            <NavLink exact to="/">
                <img src={logo} alt="logo"/>
            </NavLink>
            <div>
                {
                    navbar_links.map((nav_link)=>{
                        return <NavLink key={id++} exact className="navbar_link" activeClassName="navbar_link_active" to={nav_link.path}>{nav_link.link}</NavLink>
                    })
                }
            </div>
        </div>
    );
}

export default Navbar;