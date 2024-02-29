import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setcurrentTopic } from "../redux/slices/topisSlice";

export const Cards = ({ topics }) => {
  return (
    <>
      {topics.map((topic, index) => {
        let urlImg = topic.title.toLowerCase().split(" ").join("-");
        console.log(urlImg)
        return (
          <>
            <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
              <div className="gallery-item h-100">
                <img
                  src={"imgs/" + urlImg + ".jpg"}
                  className="img-fluid"
                  alt=""
                />
                <div className="gallery-links d-flex align-items-center justify-content-center">
                  <a
                    data-bs-toggle="modal"
                    href={"#modalFom" + topic.id}
                    key={topic.id}
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
