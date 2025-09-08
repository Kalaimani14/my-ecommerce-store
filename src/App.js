import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import DisplayData from './Components/DisplayData';
import Nav from './Components/Nav';
import Help from "./Components/Help";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Service from "./Components/Service";
import Login from "./Components/Login";
import Signup from "./Components/Signup";


function App() {
  const [addedtocardcount, setaddedtocardcount] = useState(0)
  const [popupstatus, setpopupstatus] = useState(0)
  function headercount(count) {
    setaddedtocardcount(count);
  }
  // function openpopup(){
  //   setpopupstatus(1);
  // }
  return (
    <div className='container'>
      <div className='max-w'>
        <Nav
          addedtocardcount={addedtocardcount}
          openpopup={() => { setpopupstatus(1) }}  /*  openpopup={openpopup} */
        />
          {/* ✅ Routing setup */}
        <Routes>
          {/* <Route
            path="/"
            element={
              <DisplayData
                headercount={headercount}
                popupstatus={popupstatus}
                popupclose={() => setpopupstatus(0)}
              />
            }
          /> */}
          <Route path="/help" element={<Help/>} />
          <Route path="/product" element={<Service/>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        <DisplayData
          headercount={headercount}
          popupstatus={popupstatus}
          popupclose={() => setpopupstatus(0)}
        />
       
      </div>
    </div>
  );
}
export default App;
