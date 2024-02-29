import React from "react";
import { Galery } from "../componets/Galery";
import { Link } from "react-router-dom";

export const Home = () => {

  return (
    <>
    
    <section
      id="hero"
      className="hero d-flex flex-column justify-content-center align-items-center"
      data-aos="fade"
      data-aos-delay="1500"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>
              Hola soy <span>Oxbabel</span> Youtuber, Creador de Contenido
            </h2>
            <p>
              Te estare compartiendo diferentes temas de tu interes en este
              mundo de ROBLOX
            </p>
            <a href="/contactame" className="btn-get-started">
              Contactame para colaboraciones
            </a>
          </div>
        </div>
      </div>
    </section>
    

    <Galery />
    
    </>
  );
};
