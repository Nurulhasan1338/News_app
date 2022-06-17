import './App.css';
import Navbar from "./components/Navbar.js";
import NewsComp from './components/NewsComp.js';
import About from './components/about';
import Sidebar from './components/Sidebar';
import React from 'react'
import {
  BrowserRouter as Router,
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


      <div className='container mystyle2'>
  <Routes>
      <Route path='/dailyhunt' element={<NewsComp key="home" category={1}/>} /> 
      <Route path='/dailyhunt/general' element={<NewsComp key="general" category={99}/>} /> 
      <Route path='/dailyhunt/entertainment' element={<NewsComp key="entertainment" category={3}/>} />
      <Route path='/dailyhunt/business' element={<NewsComp key="business" category={2}/>} />
      <Route path='/dailyhunt/health' element={<NewsComp key="health" category={4}/>} />
      <Route path='/dailyhunt/science' element={<NewsComp key="science" category={6}/>} />
      <Route path='/dailyhunt/sports' element={<NewsComp key="sports" category={7}/>} />
      <Route path='/dailyhunt/technology' element={<NewsComp key="technology" category={8} />} />
      <Route path='/dailyhunt/About' element={<About key="About"/>} />
  </Routes>
  </div>
        </Router>
      </div>
    )
  
}

export default App;