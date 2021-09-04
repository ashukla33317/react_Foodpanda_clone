import React from 'react';
import NEWS_CARD from './NEWS_CARD';
import image_1 from '../images/press/press_news_1.jpg';
import image_2 from '../images/press/press_news_2.jpg';
import image_3 from '../images/press/press_news_3.jpg';
// import NEWS_FEED from './NEWS_FEED';


const News  =()=>{

    let id = 900;

    const cards = [
        {
            path : image_1,
            link : 'foodpanda to build new Asia tech hub in Taiwan',
            para_text : 'Slated to begin operations in the second half 2021, the tech hub will focus on R&D in new technologies and enhancements to scale up product innovation and platform optimization across its mobile and web applications.',
        },
        {
            path : image_2,
            link : 'foodpanda 獨家攜手台北市政府力推數位菜市場！  柯市長親訪攤位揀貨初體驗  光復、松江、西湖市場首波登場 Q3 北市外送涵蓋率達 90%',
            para_text : 'A collaboration with Chughtai Lab to provide free insurance coverage to Home Chefs.'
        },
        {
            path : image_3,
            link : 'Delivering Safe: foodpanda Introduces Insurance Packages for its Home Chefs',
            para_text : 'A collaboration with Chughtai Lab to provide free insurance coverage to Home Chefs.'
        }
    ];

    return (
        <div id="news">
            {
                cards.map((card)=>{
                    return <NEWS_CARD key={id++} path={card.path} para_text={card.para_text}  link={card.link}/>
                })
            }
            {
                cards.map((card)=>{
                    return <NEWS_CARD key={id++} path={card.path} para_text={card.para_text}  link={card.link}/>
                })
            }
        </div>
    );
}

export default News;