import React from "react";

export const LoadCard = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gallery-item h-100">
        <img src="imgs/icon-oxbabel.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
          <a
            class="btn btn-primary disabled placeholder col-6"
            aria-disabled="true"
          ></a>
        </div>
      </div>
    </div>
  );
};
