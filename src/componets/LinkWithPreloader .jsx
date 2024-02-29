
import React from 'react';
import { Link } from 'react-router-dom';

const preLoader = () => {
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    preloader.classList.add("loaded");
    setTimeout(() => {
      preloader.remove();
    }, 1000); // Elimina el preloader después de 1 segundo
  }
};

const LinkWithPreloader = ({ to, children, ...rest }) => {
  const handleClick = (e) => {
    e.preventDefault();
    preLoader(); // Ejecuta el preloader
    setTimeout(() => {
      window.location.href = to; // Navega a la nueva ruta después de que se complete el preloader
    }, 1000);
  };

  return (
    <Link {...rest} to={to} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default LinkWithPreloader;
