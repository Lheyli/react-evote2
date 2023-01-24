import orange from "./orange.png";
import "./user.css";


export default function User() {


    return (
        <div>
            
            <form className="ff">
            <img className="orange" src={orange} alt="orange" height={100} width={100}/>
            <h1 className="nam">Name</h1>
           
            <p className="m"> Mobile:</p>
            <p className="a"> Address:</p>
            <p className="db"> DBirth:</p>
            <p className="s"> Status:</p>
                
               
            </form>
            <div>
                <form className="fff">
                    <h1 className="n">No data available</h1>
            
                    
                    <p className="l"> List will be available here!</p>
                </form>
               
            </div>
        </div>
    )
}

