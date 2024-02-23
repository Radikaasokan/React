import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Register from './Register';
import Count from './Count';
import Arrayadd from './Arrayadd';
import Apidata from './Apidata';
import Page from './Page';
import Figma from './Figma';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Count' element={<Count/>}/>
          <Route path='/Arrayadd' element={<Arrayadd/>}/>
          <Route path='/Apidata' element={<Apidata/>}/>
          <Route path='/Page' element={<Page/>}/>
          <Route path='/Figma' element={<Figma/>}/>

        </Routes>
      </div>
    </Router>
    
  )
}

export default App