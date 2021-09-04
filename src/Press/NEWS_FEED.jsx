import React from 'react';
import News from './News';
import Know from './Know';

const NEWS_FEED = ()=>{
    return(
        <div id="news_feed">
            <News/>
            <Know/>
        </div>
    );
}

export default NEWS_FEED;