import React,{useState} from 'react';

const Slider = ()=>{

    const [flag,setFlag] = useState(true);

    setInterval(()=>{ setFlag(!flag) }, 5000);

    const div_1 = ( <div id="slider" className='slider_1'>
    <h1>BRINGING GOOD FOOD INTO YOUR EVERYDAY</h1>
</div>);

    const div_2 = (
        <div id="slider" className='slider_2'>
        <h1>BRINGING GOOD FOOD INTO YOUR EVERYDAY</h1>
    </div>
    );

    if (flag){
        return div_1;
    } else{
        return div_2;
    }
}

export default Slider;