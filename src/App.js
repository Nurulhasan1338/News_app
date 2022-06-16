import './App.css';
import Navbar from "./components/Navbar.js";
import NewsComp from './components/NewsComp.js';
import About from './components/about';
import Sidebar from './components/Sidebar';
import LoadingBar from 'react-top-loading-bar'
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


const App =()=>{

    const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
     <Navbar/>

     <LoadingBar
        color='#0038ff'
        progress={progress}
       
      />
      <div className="mystyle1">
        <Sidebar/>
      </div>


      <div className='container mystyle2'>
  <Routes>
      <Route path='/News_app' element={<NewsComp key="home" progres={setProgress} pagesize={6} country="in" category="general"/>} /> 
      <Route path='/News_app/general' element={<NewsComp key="general" progres={setProgress} pagesize={6} country="in" category="general"/>} /> 
      <Route path='/News_app/entertainment' element={<NewsComp key="entertainment" progres={setProgress} pagesize={6} country="in" category="entertainment"/>} />
      <Route path='/News_app/business' element={<NewsComp key="business" progres={setProgress} pagesize={6} country="in" category="business"/>} />
      <Route path='/News_app/health' element={<NewsComp key="health" progres={setProgress} pagesize={6} country="in" category="health"/>} />
      <Route path='/News_app/science' element={<NewsComp key="science" progres={setProgress} pagesize={6} country="in" category="science"/>} />
      <Route path='/News_app/sports' element={<NewsComp key="sports" progres={setProgress} pagesize={6} country="in" category="sports"/>} />
      <Route path='/News_app/technology' element={<NewsComp key="technology" progres={setProgress} pagesize={6} country="in" category="technology"/>} />
      <Route path='/News_app/About' element={<About key="About"/>} />
  </Routes>
  </div>
        </Router>
      </div>
    )
  
}

export default App;