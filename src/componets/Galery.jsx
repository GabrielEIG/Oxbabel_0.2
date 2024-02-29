import React, { useEffect, useState } from "react";
import { Cards } from "./Cards";
import { CardModal } from "./CardModal";
import { LoadCard } from "./LoadCard";

export const Galery = () => {
  const [videos, setvideos] = useState([]);
  const [topics, setTopics] = useState({});
  const [loading, setLoading] = useState(true);

  const getDatas = async () => {
    const response = await fetch(
      "https://robloxbabel.onrender.com/api/tendencias"
    );
    const result = await response.json();
    setvideos(result);
    setLoading(false);
  };

  const getMods = async () => {
    const response = await fetch("https://robloxbabel.onrender.com/api/mods");
    const result = await response.json();
    setTopics(result);
    setLoading(false);
  };

  useEffect(() => {
    getMods();

  }, []);

  return (
    <main id="main" data-aos="fade" data-aos-delay="1500">
      <section id="gallery" className="gallery">
        <div className="container-fluid">
          <div className="row gy-4 justify-content-center">
            {loading ? (
              <>
              
              <LoadCard />
              <LoadCard />
              <LoadCard />

          </>
            ) : (
              
              <>
                    <Cards topics={topics} />
                    <CardModal topics={topics} />
                  </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
