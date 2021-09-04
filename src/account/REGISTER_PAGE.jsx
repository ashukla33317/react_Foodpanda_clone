import React,{useState} from 'react';

const REGISTER_PAGE = ()=>{

    const [input_value,set_input_value]=useState({
        user_name : '',
        email : '',
        contact : '',
        password : '',
        confirm_password : ''
    })


    const on_change_event = (event)=>{

        const {name,value} = event.target;

        set_input_value((previous_value)=>{
            return{
                ...previous_value,
                [name] : value
            };
        });
    }

    return (
        <form action="" className="account_form">
            <h1>Sign up</h1>
            <label htmlFor="">Name : 
                <input 
                    type="text" 
                    name="user_name" 
                    id=""
                    value={input_value.user_name}
                    onChange={on_change_event}
                    autoCorrect="off"
                    required
                />
            </label>
            <label htmlFor="">email : 
                <input 
                    type="email" 
                    name="email" 
                    id=""
                    value={input_value.email}
                    onChange={on_change_event}
                    autoCorrect="off"
                    required
                />
            </label>
            <label htmlFor="">Contact : 
                <input 
                    type="text" 
                    name="contact" 
                    id=""
                    value={input_value.contact}
                    onChange={on_change_event}
                    autoCorrect="off"
                    required
                />
            </label>
            <label htmlFor="">Password : 
                <input 
                    type="password" 
                    name="password" 
                    id=""
                    value={input_value.password}
                    onChange={on_change_event}
                    autoCorrect="off"
                    required
                />
                </label>
                <label htmlFor="">Confirm Password : 
                <input 
                    type="password" 
                    name="confirm_password" 
                    id=""
                    value={input_value.confirm_password}
                    onChange={on_change_event}
                    required
                />
            </label>
            <button type="submit">Sign up</button>
        </form>
    );
}

export default REGISTER_PAGE;