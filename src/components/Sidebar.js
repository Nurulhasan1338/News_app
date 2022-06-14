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
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/business">Business</Link></li> 
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/health">Health</Link></li>
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/science">Science</Link></li>
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/sports">Sports</Link></li>
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/technology">Technology</Link></li>
 
</ul>

    </div>
  )
}
