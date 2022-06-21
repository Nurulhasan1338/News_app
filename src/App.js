import './css/App.css';
import Navbar from "./components/Navbar.js";
import NewsComp from './components/NewsComp.js';
import About from './components/about';
import Sidebar from './components/Sidebar';
import React from 'react'

// different types of articals
import Articles from './components/articales/articles';
import Bussiness from './components/articales/bussiness';
import Tech from './components/articales/tech';
import enter from './components/articales/entertaiment';
import Health from './components/articales/health';
import Sports from './components/articales/sports';
import science from './components/articales/science';

import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



const App =()=>{

    return (
      <div>
        <Router>
     <Navbar/>

      <div className="mystyle1">
        <Sidebar/>
      </div>


      <div className='container p-0 mystyle2'>
  <Routes>
      <Route path='/' element={<NewsComp key="home" category="General" articales={Articles}/>} /> 
      <Route path='/dailyhunt/entertainment' element={<NewsComp key="entertainment" category="entertaiment" articales={enter}/>} />
      <Route path='/dailyhunt/business' element={<NewsComp key="business" category="Bussiness" articales={Bussiness}/>} />
      <Route path='/dailyhunt/health' element={<NewsComp key="health" category="Health" articales={Health}/>} />
      <Route path='/dailyhunt/science' element={<NewsComp key="science" category="Science" articales={science}/>} />
      <Route path='/dailyhunt/sports' element={<NewsComp key="sports" category="Sports" articales={Sports}/>} />
      <Route path='/dailyhunt/technology' element={<NewsComp key="technology" category="Technology" articales={Tech} />} />
      <Route path='/dailyhunt/About' element={<About key="About"/>} />
  </Routes>
  </div>
        </Router>
      </div>
    )
  
}

export default App;