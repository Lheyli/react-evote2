import "./forgot.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Forgot(){
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirect) navigate("/Resetpage");
  }, [shouldRedirect]);
    return  (
     
    <form className="fm">
    <p className="FP">Forgot Password</p> 
    <h1 className="ea">Email Address</h1>
    <input className="ttt" type="text"  /> 
    <button onClick={() => setShouldRedirect(true)} className="src" >Send Reset Code</button>
  
</form>

)


    }
