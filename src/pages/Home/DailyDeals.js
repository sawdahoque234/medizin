import React from "react";
import dailydealpd1 from "../../images/dailydeal1.jpg";
import dailydealpd2 from "../../images/dailydeal2.jpg";
import dailydealpd3 from "../../images/dailydeal3.jpg";
import dailydealpd4 from "../../images/dailydeal4.jpg";
import dailydealpd5 from "../../images/dailydeal5.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const DailyDeals = () => {
  return (
    <div>
      <div class="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="fs-2 fw-bolder my-5">Daily Deal Of The Day</h1>

        <div class="row row-cols row-cols-lg-5 g-2 g-lg-3 py-5">
          <div class="col">
            <div class="border bg-light">
              <span class="badge bg-danger">-26%</span>
              <h6 className="text-secondary my-3">PERSONAL</h6>
              <h5>Anti-septic Dry Hand Gel</h5>
              <span className="text-secondary fw-bolder fs-4 mx-2">$20.00</span>
              <span className="text-danger text-decoration-line-through">
                $30.00
              </span>

              <img
                src={dailydealpd1}
                alt=""
                className="w-100"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>
          </div>
          <div class="col">
            <div class=" border bg-light">
              <span class="badge bg-danger">-32%</span>
              <h6 className="text-secondary my-3">HOSPITAL EQUIPMENT</h6>
              <h5>Surgical Latex Gloves</h5>
              <span className="text-secondary fw-bolder fs-4 mx-2">$10.00</span>
              <span className="text-danger text-decoration-line-through">
                $15.00
              </span>

              <img
                src={dailydealpd2}
                alt=""
                className="w-100"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>
          </div>
          <div class="col">
            <div class=" border bg-light">
              <span class="badge bg-danger">-33%</span>
              <h6 className="text-secondary my-3">HOSPITAL EQUIPMENT</h6>
              <h5>Manual Oxygen Device</h5>
              <span className="text-secondary fw-bolder fs-4 mx-2">$18.00</span>
              <span className="text-danger text-decoration-line-through">
                $27.00
              </span>

              <img
                src={dailydealpd3}
                alt=""
                className="w-100"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>
          </div>
          <div class="col">
            <div class=" border bg-light">
              <span class="badge bg-danger">-40%</span>
              <h6 className="text-secondary my-3">HOSPITAL EQUIPMENT</h6>
              <h5> 12-Ply Gauze Sponzes</h5>
              <span className="text-secondary fw-bolder fs-4 mx-2">$17.00</span>
              <span className="text-danger text-decoration-line-through">
                $23.00
              </span>
              <img
                src={dailydealpd4}
                alt=""
                className="w-100"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>
          </div>
          <div class="col">
            <div class=" border bg-light">
              <span class="badge bg-danger">-20%</span>
              <h6 className="text-secondary my-3">HOSPITAL EQUIPMENT</h6>
              <h5>Air Compressor</h5>
              <span className="text-secondary fw-bolder fs-4 mx-2">$25.00</span>
              <span className="text-danger text-decoration-line-through">
                $33.00
              </span>
              <img
                src={dailydealpd5}
                alt=""
                className="w-100"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>
            <Link to="/shop" style={{ textDecoration: "none" }}>
              <h6 style={{ textAlign: "right", cursor: "pointer" }}>
                View all Products{" "}
                <BsFillArrowRightCircleFill className="text-primary my-3 fs-3" />
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyDeals;
