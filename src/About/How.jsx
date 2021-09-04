import React ,{useState} from 'react';
import mobile from '../images/mobile.svg';
import bike from '../images/bike.svg';
import carry_bag from '../images/carry_bag.svg'
import ABOUT_LINK from './ABOUT_LINK';
// import ABOUT_INTRO from './ABOUT_INTRO';

const How = ()=>{

    let id = 500;

    const about_links = [
        {
            path : mobile,
            title : 'Order'
        },
        {
            path : bike,
            title : 'Realx'
        },
        {
            path : carry_bag,
            title : 'Enjoy'
        }
    ];


    const link_text = [
        'Discover over 36,000 delicious restaurants worldwide and order their tasty meals right to you',
        'Sit back and relax as the restaurant prepares your order',
        'Our rider picks up your order and brings it to you. Enjoy!'
    ]

    const [hover_text,set_hover_text] = useState(link_text[0])

    const hover_mouse_event = (index)=>{
        set_hover_text(link_text[index])
    }


    const changing_text = <h3 className="how_link_text">{hover_text}</h3>

    return (
        <div id="how">
        <h1>How it works</h1>
        <div id="how_links">
            {
                about_links.map((link,index )=>{
                    return <ABOUT_LINK key={id++} index = {index} img_path={link.path} link_title = {link.title} hover_event_function={hover_mouse_event}/>
                })
            }
        </div>
            {changing_text}
    </div>
    );
}

export default How;