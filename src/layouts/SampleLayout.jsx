import Navbar from "../Navbar";

const SampleLayout = ({children}) => {
    return <div >
        <Navbar />
        
        {children}
    </div>
}



export default SampleLayout;