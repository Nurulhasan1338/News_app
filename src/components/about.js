import React from 'react'
import logo from "./logo192.png";
export default function About() {
  return (
    <div>
      <div className='d-flex justify-content-between w-100 m-3 p-3'>
        <div className='w-50'>
        <h1>About</h1>
        <br />
      <p> Hello everyone,<br />
          My self Nurul Hasan from IIIT KOTA and hope you like my Work and keep supporting my work on my sosial media handles.
           I am a react Developer and this whole website is made from react.This makes my  work very systematic without any hassel.
         <p>This news website will bring latest new around the world from various feilds.
 This is also responsive so you can enjoy it in any device.For styling, Bootstrap is used but not majorly, as I gave my own styling at various parts
         </p>
        </p>
        </div>
      <img src={logo} className="w-50" alt="" /></div>
    </div>
  )
}
