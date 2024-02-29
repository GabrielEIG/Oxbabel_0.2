import React from "react";

export const CardModal = ({ topics}) => {
  return (
    <>
      {topics.map((topic, index) => {
        let urlImg = topic.title.toLowerCase().split(" ").join("-");
        return (
          <>
            <div
              key={index}
              className="portfolio-modal modal fade"
              id={"modalFom" + topic.id}
              tabIndex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="close-modal" data-bs-dismiss="modal">
                    <i className="bi bi-x-lg"></i>
                  </div>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <div className="modal-body">
                          <h2 className="text-uppercase">{topic.title}</h2>
                          {/* <p className="item-intro text-muted">{topic.price}</p> */}
                          <img
                            src={"imgs/" + urlImg + ".jpg"}
                            className="img-fluid"
                            alt=""
                          />

                          <section
                            id="gallery-single"
                            className="gallery-single"
                          >
                            <div className="container">
                              <div className="row justify-content-between mt-4">
                                <div className="">
                                  <div className="portfolio-description">
                                    {topic.subtitle.map((subtitle, index) => {
                                      return (
                                        <div
                                          className="testimonial-item pb-3"
                                          key={index}
                                        >
                                          <h2>{subtitle.title}</h2>

                                          <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            {subtitle.description}
                                            <i className="bi bi-quote quote-icon-right"></i>
                                          </p>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          <button
                            className="btn btn-secondary btn-xl text-uppercase"
                            data-bs-dismiss="modal"
                            type="button"
                          >
                            <i className="fas fa-xmark me-1"></i>
                            Cerrar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
