import React from 'react'
import '../items.css'
import {
    Link
  } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <h3 className='px-2'>Categories</h3>
<ul className="list-group list-group-flush ">
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/News_app/business">Business</Link></li> 
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/News_app/entertainment">Entertainment</Link></li>
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/News_app/health">Health</Link></li>
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/News_app/science">Science</Link></li>
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/News_app/sports">Sports</Link></li>
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/News_app/technology">Technology</Link></li>
 
</ul>

    </div>
  )
}
