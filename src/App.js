import './App.css';
import Registration from "./pages/Registration";
import About from "./pages/About.js";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AdminLog from './admin/AdminLog';
import Nav from './admin/Nav';
import Forgot from './pages/Forgot'
import Resetpage from './pages/Resetpage'
import SampleLayout from './layouts/SampleLayout';
import Sample from './layouts/Sample';
import Dashboard from './admin/Dashboard';
import Logout from './admin/Logout';
import User from './user/User';
import Usernav from './layouts/Usernav';


function App() {
  return (
  <>
  
  <div className='container1'>
    <Routes>
        <Route path= "/" element={<SampleLayout><Home /></SampleLayout> } />
        <Route path= "/AdminLog" element={<SampleLayout><AdminLog /></SampleLayout>} />
        <Route path= "/Nav" element={<Nav /> } />
        <Route path= "/Dashboard" element={<Sample><Dashboard /> </Sample>} />
        <Route path= "/Logout" element={<SampleLayout><Logout /> </SampleLayout>} />
        <Route path= "/Forgot" element={<SampleLayout><Forgot /></SampleLayout>} />
        <Route path= "/Resetpage" element={<SampleLayout><Resetpage /></SampleLayout>} />
        <Route path= "/registration" element={<SampleLayout><Registration /></SampleLayout> } />
        <Route path= "/login" element={<SampleLayout><Login /></SampleLayout> } />
        <Route path= "/contact" element={<SampleLayout><Contact /></SampleLayout> } />
        <Route path= "/about" element={<SampleLayout><About /></SampleLayout> } />
        <Route path= "/User" element={<Usernav><User /></Usernav> } />
    </Routes>
  </div>

  </>
  )
}

export default App;
