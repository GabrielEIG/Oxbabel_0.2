import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import LinkWithPreloader from "./LinkWithPreloader ";


export const Menu = ({routes}) => {


  function toogleLabel(e) {
    const links = document.querySelectorAll('.label');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');
  
    // Remover la clase 'active' de todos los elementos
    links.forEach(link => link.classList.remove('active'));
  
    // Agregar la clase 'active' al elemento clickeado
    e.currentTarget.classList.add('active');
  
    // Cerrar el menú móvil
    mobileNavToogle();
  }

  function mobileNavToogle() {
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');

    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  return (

    <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid d-flex align-items-center justify-content-between">

      <a href="/" className="logo d-flex align-items-center  me-auto me-lg-0">

        <i className="bi"><img src="imgs/icon-oxbabel.jpg" alt="" className="rounded-5"/></i>
        
        <h1>BABEL</h1>
      </a>

      <nav id="navbar " className="navbar">

      <ul>
      {routes.map((route, index) => (
            <li key={index} onClick={e=>toogleLabel(e)} className="label ">
              <a href={route.path}>{route.label}</a>
            </li>
          ))}
        
        </ul>

        
      </nav>

      <div className="header-social-links">
        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
      <i onClick={mobileNavToogle} className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i onClick={mobileNavToogle} className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header>
        
  );
};
