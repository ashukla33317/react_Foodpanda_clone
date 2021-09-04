import React from 'react';
import Bangladesh from '../images/country/Bangladesh.png';
import cambodia from '../images/country/Combodia.png';
import DE from '../images/country/DE.png';
import HK from '../images/country/HK-1.png';
import JP from '../images/country/JP.png';
import laos from '../images/country/Laos.png';
import MY from '../images/country/MY.png';
import myanmar from '../images/country/Myanmar.png';
import PH from '../images/country/PH.png';
import PK from '../images/country/PK.png';
import SG from '../images/country/SG-1.png';
import TH from '../images/country/TH.png';
import TW from '../images/country/TW.png';
import {Link} from 'react-router-dom';

const Location = () => {
    const flags = [Bangladesh , cambodia , DE , HK , JP , laos , MY , myanmar , PH , PK , SG , TH , TW];
    let id = 300;
    return(
        <div id="flags">
        <p>CHOOSE YOUR LOCATION :</p>
        <div>
        {
            flags.map((flag)=>{
                return <Link key={id++} className="flag_img">
                <img src={flag} alt="country_flag" />
                </Link>
            })
        }
        </div>
        </div>
    )
};
export default Location;