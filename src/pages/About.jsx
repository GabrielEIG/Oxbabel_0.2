import React from 'react'

export const About = () => {
  return (
    <main id="main" data-aos="fade" data-aos-delay="1500">

    <div class="page-header d-flex align-items-center">
      <div class="container position-relative">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-6 text-center">
            <h2>Acerca de mi</h2>
            <p>Soy creador de contenido, en el mundo de roblox, me gusta dar consejos y trucos para llevar menos estres en este increible mundo.</p>

            <a href="/contactame" className="btn-get-started">
              Contactame para colaboraciones
            </a>

          </div>
        </div>
      </div>
    </div>

    <section id="about" class="about">
      <div class="container">

        <div class="row gy-4 justify-content-center">
          <div class="col-lg-4">
            <img src="imgs/icon-oxbabel.jpg " class="img-fluid rounded-5"  alt=""/>
          </div>
          <div class="col-lg-5 content">
            <h2>Creador de contenido</h2>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Nacimiento:</strong> <span>2 mayo 2020</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Correo Electronico:</strong> <span>Robloxbabel@gmail.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Ciudad:</strong> <span>Roblox City</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Años:</strong> <span>2</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Suscriptores:</strong> <span>+100k</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


  </main>
  )
}
