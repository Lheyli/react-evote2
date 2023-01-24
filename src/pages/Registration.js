import { useState } from "react"; 
import { useForm } from "react-hook-form";
import React from "react";
import "./reg.css";


function Registration(){
    
    const { register, handleSubmit, errors } = useForm();
    const [ userInfo, setUserInfo ] = useState(); 
    const onSubmit = (data) => {
        setUserInfo(data);
        console.log(data);
    };
    console.log(errors);
    return (
        <div className="container">
            <pre> { JSON.stringify(userInfo, undefined, 2)} </pre>
             <h3>Registration</h3>
            <form onSubmit={ handleSubmit (onSubmit)}>
               
                <div className="ui divider"></div>
                <div className="ui form">
                <div className="field1">
                   
                    <input className="lli" type="text"  placeholder="Name" {...register('name', { required: true })} ></input>
                    </div>
                   
                    <div className="field2">
                    
                    <input className="lii"  type="email"  placeholder="Email" {...register('emai', { required: true })}></input>
                    </div>
                   
                    <div className="field3">
                    
                    <input className="liii"  type="text"  placeholder="Mobile Number" {...register('mobile', { required: "Mobile Number is required" })}></input>
                    </div>
                    
                    <div className="field4">
                    
                    <input className="liiii"  type="text"  placeholder="Birth Date" {...register('bday', { required: "Birth Date is required" })}></input>
                    </div>
                    
                    <div className="field5">
                    
                    <input className="liiiii"  type="password"  placeholder="Password" {...register('password', { required: "Password is required" })}></input>
                    </div>
                    
                    <div className="field6">
                    
                    <input className="liiiiii"  type="password"  placeholder="Confirm Password" {...register('cpass', { required: "Confirm Password is required" })}></input>
                    </div>
                    
                    <div className="field7">
                    
                    <input className="liiiiiii"  type="text"  placeholder="Address" {...register('address', { required: "Address is required" })}></input>
                    </div>
                   
                    <div className="field8">
                    
                    <input className="liiiiiiii"  type="text"  placeholder="Verification Code"{...register('vcode', { required: "Verification Code is required" })} ></input>
                    </div>
                    
                    <button className="btn1">Register</button>
                    <button className="button2">Back</button>
              </div>
            </form>
        </div>
    );
}



export default Registration