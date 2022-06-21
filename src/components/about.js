import React from "react";
import Header from "../css/header.jpg";
import "../css/items.css";
export default function About() {
  return (
    <div>
    <h1 className="pt-5 ps-4">About</h1>

      <div className="w-100 p-3">
        <p>
          Hello everyone,
          <br />
          My self Nurul Hasan from IIIT KOTA and hope you like my Work. I am a react Developer
          and this whole website is made from react it makes my work very
          systematic without any hassel.
          <br />
        </p>
        <p>
          This news website will bring latest new around the world from various
          feilds. This is also responsive so you can enjoy it in any device. <br /> For
          styling, Bootstrap is used but not majorly, as I gave my own styling
          at various parts. <br />
          I fetched news api from another sourece but here in deployment version i used some example news.json
        </p>
         <span><h6>you can follow me on..</h6></span>
        <ul className="contact">
          <li><a href="nuruhasah62@gmail.com"><ion-icon name="mail"></ion-icon></a></li>
          <li><a href=""><ion-icon name="logo-github"></ion-icon></a></li>
          <li><a href=""><ion-icon name="logo-linkedin"></ion-icon></a></li>
          <li><a href=""><ion-icon name="logo-twitter"></ion-icon></a></li>
        </ul>
        </div>

    </div>
  );
}
