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
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/dailyhunt/business">Business</Link></li> 
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/dailyhunt/entertainment">Entertainment</Link></li>
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/dailyhunt/health">Health</Link></li>
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/dailyhunt/science">Science</Link></li>
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/dailyhunt/sports">Sports</Link></li>
        <li className="nav-item"> <Link className="nav-link py-2 fs-5 ps-2 Side" aria-current="page" to="/dailyhunt/technology">Technology</Link></li>
 
</ul>

    </div>
  )
}
