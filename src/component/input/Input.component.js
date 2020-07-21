import React from 'react';
import InputStyle from './Input.module.css'

const Input = () => {
    return (
       <div className={InputStyle.inputBox}>
            <form > 
                    <input  className={InputStyle.input} placeholder='Search Your Favorite Film Hire'/>
            </form>
       </div>
           
    );
}

export default Input;
