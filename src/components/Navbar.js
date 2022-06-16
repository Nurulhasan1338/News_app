import React from 'react'
import  '../App.css';
import {
  Link,
} from "react-router-dom";

const Navbar=()=>{
    return (
      <div className="mb-1 mystyle3">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><span class="mt-1 material-symbols-outlined"> newspaperNews
</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/">Home</Link></li>
       <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/About" >About</Link></li>
       <div className="hiddn">
       <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/business">Business</Link></li> 
        <li className="nav-item"> <Link className="nav-link py-2 fs-6 ps-1 Side" aria-current="page" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"> <Link className="nav-link py-2 fs-6 ps-1 Side" aria-current="page" to="/health">Health</Link></li>
        <li className="nav-item"> <Link className="nav-link py-2 fs-6 ps-1 Side" aria-current="page" to="/science">Science</Link></li>
        <li className="nav-item"> <Link className="nav-link py-2 fs-6 ps-1 Side" aria-current="page" to="/sports">Sports</Link></li>
        <li className="nav-item"> <Link className="nav-link py-2 fs-6 ps-1 Side" aria-current="page" to="/technology">Technology</Link></li>
       </div>
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )

}

export default Navbar;





