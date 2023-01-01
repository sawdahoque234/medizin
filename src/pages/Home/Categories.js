import React from "react";
import categorie1 from "../../images/categorie-1.jpg";
import categorie2 from "../../images/categorie-2.png";
import categorie3 from "../../images/categorie-3.jpg";
import categorie4 from "../../images/categorie-4.jpg";
import categorie5 from "../../images/categorie-5.jpg";
import categorie6 from "../../images/categorie-6.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div>
      <div class="mx-2">
        <h1 className="fs-2 fw-bolder my-5">Shop By Categories</h1>
        <small></small>

        <div class="row row-cols row-cols-lg-6 g-2 g-lg-3 py-5">
          <div class="col">
            <div class="border bg-light">
              <img
                src={categorie1}
                alt=""
                data-aos="flip-up"
                data-aos-duration="1500"
                width="250px"
              />
              <h6 className="text-secondary my-3">HOSPITAL EQUIPMENT</h6>
            </div>
          </div>
          <div class="col">
            <div class=" border bg-light">
              <img
                src={categorie2}
                alt=""
                width="250px"
                data-aos="flip-up"
                data-aos-duration="1500"
              />
              <h6 className="text-secondary my-3">BLOOD PRESSURE</h6>
            </div>
          </div>
          <div class="col">
            <div class=" border bg-light">
              <img
                src={categorie3}
                alt=""
                width="250px"
                data-aos="flip-up"
                data-aos-duration="1500"
              />
              <h6 className="text-secondary my-3">ACCESSORIES</h6>
            </div>
          </div>
          <div class="col">
            <div class=" border bg-light">
              <img
                src={categorie4}
                alt=""
                width="250px"
                data-aos="flip-up"
                data-aos-duration="1500"
              />
              <h6 className="text-secondary my-3">PERSONAL</h6>
            </div>
          </div>
          <div class="col">
            <div class=" border bg-light">
              <img
                src={categorie5}
                alt=""
                width="250px"
                data-aos="flip-up"
                data-aos-duration="1500"
              />
              <h6 className="text-secondary my-3">INDEPENDENT LIVING</h6>
            </div>
          </div>
          <div class="col">
            <div class=" border bg-light">
              <img
                src={categorie6}
                alt=""
                data-aos="flip-up"
                width="250px"
                data-aos-duration="1500"
              />
              <h6 className="text-secondary my-3">PHARMACY</h6>
            </div>
          </div>
        </div>
        <Link to="/shop" style={{ textDecoration: "none" }}>
          <h6 style={{ textAlign: "right", cursor: "pointer" }}>
            View all Products{" "}
            <BsFillArrowRightCircleFill className="text-primary my-3 mx-2 fs-3" />
          </h6>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
