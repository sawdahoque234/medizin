/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import dailydealpd1 from "../../images/dailydeal1.jpg";
import dailydealpd2 from "../../images/dailydeal2.jpg";
import dailydealpd3 from "../../images/dailydeal3.jpg";
import dailydealpd4 from "../../images/dailydeal4.jpg";
import dailydealpd5 from "../../images/dailydeal5.jpg";
import dailydealpd6 from "../../images/product-30.jpg";
import dailydealpd7 from "../../images/product-36.jpg";

const Shop = () => {
  return (
    <div>
      <div className="row my-4">
        <div className="col-3 my-4 bg-light">
          <div>
            <h5 className="fw-bold my-3">Categories</h5>
            <ul style={{ listStyle: "none" }}>
              <li
                style={{ cursor: "pointer", textAlign: "left" }}
                className="my-2"
              >
                {" "}
                <span className="fw-bolder  mx-2">+</span>Hospital Equipment
              </li>
              <li
                style={{ cursor: "pointer", textAlign: "left" }}
                className="my-2"
              >
                {" "}
                <span className="fw-bolder  mx-2">+</span>ACCESSORIES
              </li>
              <li
                style={{ cursor: "pointer", textAlign: "left" }}
                className="my-2"
              >
                {" "}
                <span className="fw-bolder  mx-2">+</span>Home Medical Equipment
              </li>
              <li
                style={{ cursor: "pointer", textAlign: "left" }}
                className="my-2"
              >
                {" "}
                <span className="fw-bolder  mx-2">+</span>Pharmacy
              </li>
            </ul>
          </div>
        </div>
        <div className="col-9">
          <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 py-5 mx-1">
            <div class="col">
              <div class="border bg-light">
                <span class="badge bg-danger">-26%</span>
                <img
                  src={dailydealpd1}
                  alt=""
                  className="w-100"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
                <small className="text-secondary my-3">PERSONAL</small>
                <h6>Antiseptic Dry Hand Gel</h6>
                <span className="text-primary fw-bold fs-5 mx-2">$20.00</span>
              </div>
            </div>
            <div class="col">
              <div class=" border bg-light">
                <span class="badge bg-danger">-32%</span>
                <img
                  src={dailydealpd2}
                  alt=""
                  className="w-100"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
                <small className="text-secondary my-3">
                  HOSPITAL EQUIPMENT
                </small>
                <h6>Surgical Latex Gloves</h6>
                <span className="text-primary fw-bold fs-5 mx-2">$10.00</span>
              </div>
            </div>
            <div class="col">
              <div class=" border bg-light">
                <span class="badge bg-danger">-33%</span>
                <img
                  src={dailydealpd3}
                  alt=""
                  className="w-100"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
                <small className="text-secondary my-3">
                  HOSPITAL EQUIPMENT
                </small>
                <h6>Manual Oxygen Device</h6>
                <span className="text-primary fw-bold fs-5 mx-2">$18.00</span>
              </div>
            </div>
            <div class="col">
              <div class=" border bg-light">
                <span class="badge bg-danger">-40%</span>
                <img
                  src={dailydealpd4}
                  alt=""
                  className="w-100"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
                <small className="text-secondary my-3">
                  HOSPITAL EQUIPMENT
                </small>
                <h6> Gauze Sponzes</h6>
                <span className="text-primary fw-bold fs-5 mx-2">$17.00</span>
              </div>
            </div>
            <div class="col">
              <div class=" border bg-light">
                <span class="badge bg-danger">-20%</span>
                <img
                  src={dailydealpd5}
                  alt=""
                  className="w-100"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
                <small className="text-secondary my-3">
                  HOSPITAL EQUIPMENT
                </small>
                <h6>Air Compressor</h6>
                <span className="text-primary fw-bold fs-5 mx-2">$25.00</span>
              </div>
            </div>
            <div class="col">
              <div class=" border bg-light">
                <span class="badge bg-danger">-20%</span>
                <img
                  src={dailydealpd6}
                  alt=""
                  className="w-100"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
                <small className="text-secondary my-3">Blood Pressure</small>
                <h6>Blood Pressure Monitor</h6>
                <span className="text-primary fw-bold fs-5 mx-2">$35.00</span>
              </div>
            </div>
            <div class="col">
              <div class=" border bg-light">
                <span class="badge bg-danger">-15%</span>
                <img
                  src={dailydealpd7}
                  alt=""
                  className="w-100"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
                <small className="text-secondary my-3">
                  Home Medical Supplies
                </small>
                <h6>Body Thermometer</h6>
                <span className="text-primary fw-bold fs-5 mx-2">$15.00</span>
              </div>
            </div>
          </div>

          {/* ***********************pagination*** */}
          <div className="mx-auto d-flex justify-content-center">
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item active " aria-current="page">
                  <span class="page-link mx-2" style={{ borderRadius: "50%" }}>
                    1
                  </span>
                </li>
                <li class="page-item">
                  <a
                    class="page-link mx-2"
                    href="#"
                    style={{ borderRadius: "50%", border: "1px solid gray" }}
                  >
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link"
                    href="#"
                    style={{ borderRadius: "50%", border: "1px solid gray" }}
                  >
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link mx-2"
                    href="#"
                    aria-label="Next"
                    style={{ borderRadius: "50%", border: "1px solid gray" }}
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
