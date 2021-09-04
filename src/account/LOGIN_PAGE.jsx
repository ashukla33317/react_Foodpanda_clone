import React,{useState} from 'react'

const LOGIN_PAGE = ()=>{

    const [input_value,set_input_value] = useState({
        user_name : '',
        password  : ''
    })

    const on_change_event = (event) =>{
        const {name,value} = event.target;

        set_input_value((previous_value)=>{
            return {
                ...previous_value,
                [name] : value
            }
        })

    }

    return (
        <form action="" className="account_form">
            <h1>Login</h1>
            <label htmlFor="">
                User Name : 
                <input 
                    type="text" 
                    name="user_name" 
                    id="" 
                    placeholder="user name"
                    value={input_value.user_name } 
                    onChange={on_change_event} 
                    autoCorrect="off" 
                    required
                /> 
            </label>
            <label htmlFor=""> 
            Password : 
                <input 
                    type="password" 
                    name="password" 
                    id="" 
                    value={input_value.password} 
                    onChange={on_change_event} 
                    autoComplete="off" 
                    required
                /> 
            </label>
            <button type="submit">Log in</button>
        </form>
    );
}

export default LOGIN_PAGE;
