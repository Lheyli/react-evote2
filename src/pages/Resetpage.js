import "./reset.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; 

export default function Resetpage(){
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (shouldRedirect) navigate("/Login");
    }, [shouldRedirect]);
    return  (
     
    <form className="r">
    <h1 className="rp">Reset Password</h1> 
   
    <input className="npass" type="password" placeholder="New Password"  /> 
    <input className="cpass" type="password" placeholder="Password" /> 
    <button onClick={() => setShouldRedirect(true)} className="rr" >Reset Password</button>
</form>

)

}