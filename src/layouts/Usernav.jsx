import Bar from "../user/Bar";

const Usernav = ({children}) => {
    return <div >
        <Bar />
        
        {children}
    </div>
}



export default Usernav;