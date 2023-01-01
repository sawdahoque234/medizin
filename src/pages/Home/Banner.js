import React from "react";
import bannerimg2 from "../../images/banner-img2.jpg";
import bannerimg1 from "../../images/banner-img1.jpg";
import bannerimg3 from "../../images/banner-img3.jpg";
import bannersideimg1 from "../../images/banner-sideimg1.jpg";
import bannersideimg2 from "../../images/banner-sideimg2.jpg";
// import Languageoption from "../../components/Language-dropdown";
import { useTranslation } from "react-i18next";
// import i18next from "i18next";
const Banner = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* <Languageoption onChange={(e) => handleClick(e)} /> */}

      <div class="row">
        <div class="col-8 ">
          <div
            id="carouselExampleDark"
            class="carousel carousel-white slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>{" "}
              <br />
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={bannerimg2} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block mb-4">
                  <h2>{t("bannerTitle")} </h2>
                  <p>{t("bannerSubTitle")}</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={bannerimg3} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block text-dark mb-4">
                  <h2>{t("bannerTitle")} </h2>
                  <p>{t("bannerSubTitle")}</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={bannerimg1} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block mb-4">
                  <h2>{t("bannerTitle")} </h2>
                  <p>{t("bannerSubTitle")}</p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-3 ">
          <div>
            <img src={bannersideimg1} alt="" className="my-3" />
            <h5
              className="my-3"
              style={{
                top: "0",
                marginLeft: "-7px",
              }}
            >
              {t("sideTitle")}
            </h5>
          </div>
          <div>
            <img src={bannersideimg2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
