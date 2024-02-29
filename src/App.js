import { useEffect, useState } from "react";
import "./App.css";
import { Menu } from "./componets/Menu";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "./componets/Footer";

const routes = [
  {
    path: "/",
    element: <Home />,
    label: "Inicio",
  },
  {
    path: "/quien-soy",
    label: "Quien soy",
    element: <About />,
  },
  {
    path: "/contactame",
    label: "Contactame",
    element: <Contact />,
  },
];

function App() {
  const [menuRoutes, setMenuRoutes] = useState();

  const preLoader = () => {
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      preloader.classList.add("loaded");
      setTimeout(() => {
        preloader.remove();
      }, 1000); // Elimina el preloader después de 1 segundo
    }
  };

  const initAOS = () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  };

  const scrollTop = () => {
    const scrollTop = document.querySelector(".scroll-top");
    if (scrollTop) {
      const togglescrollTop = function () {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      };
      window.addEventListener("load", togglescrollTop);
      document.addEventListener("scroll", togglescrollTop);
      scrollTop.addEventListener("click", () =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      );
    }
  };

  useEffect(() => {
    preLoader();
    initAOS();
    scrollTop();
  });

  return (
    <Router>
      <div className="App">
        <Menu routes={routes.filter((route) => Object.hasOwn(route, "label"))} />

        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>

        <Footer />

        <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a>

        <div id="preloader">
          <div className="line"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
