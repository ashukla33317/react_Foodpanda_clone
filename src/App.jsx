import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import HomePage from './Home/HomePage';
import About from './About/About';
import Careers from './Careers/Careers';
import Press from './Press/Press';
import Error from './Error'
import Footer from './Footer/Footer'
import LOGIN_PAGE from './account/LOGIN_PAGE';
import REGISTER_PAGE from './account/REGISTER_PAGE';



const App = ()=>{

    let id=200;

    const app_routs = [
        {
            path:'/',
            element : HomePage,
        },
        {
            path:'/about',
            element : About
        },
        {
            path:'/careers',
            element : Careers
        },
        {
            path:'/press',
            element : Press
        },
        {
            path : '/login',
            element : LOGIN_PAGE
        },
        {
            path : '/signup',
            element : REGISTER_PAGE
        }
    ];

    return (
        <>
            <Navbar/>
            <Switch>
                {
                    app_routs.map((route)=>{
                        return <Route key={id++} exact path={route.path} component={route.element}/>
                    })
                }
                <Route component={Error} />
            </Switch>
            <Footer/>
                
        </>
    );
}

export default App;