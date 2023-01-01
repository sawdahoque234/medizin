/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import about from "../../images/about.jpg";
import CountUp from "react-countup";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaLowVision, FaHandsHelping } from "react-icons/fa";
import { SiWorldhealthorganization } from "react-icons/si";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import team1 from "../../images/team1.jpg";
import team2 from "../../images/team2.jpg";
import team3 from "../../images/team3.jpg";
import team4 from "../../images/team4.jpg";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();

  return (
    <div className="py-2">
      <h1
        className="my-4 pt-4 text-secondary"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        {t("aboutTitle1")} <br /> {t("aboutTitle2")}
      </h1>
      <p className="w-50 mx-auto">{t("aboutSubTitle")}</p>
      <div class=" row g-3 mx-4 mt-4">
        <div class="col-6">
          <img src={about} alt="" data-aos="zoom-in" data-aos-duration="2000" />
        </div>
        <div class="col-6" style={{ textAlign: "left" }}>
          <h5 className="w-50">
            <span
              className=" text-primary fw-bolder"
              style={{ fontSize: "50px" }}
            >
              <CountUp start={0} end={40} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <span> {t("years")}</span>
            </span>{" "}
          </h5>
          <h2 className="my-4"> {t("highQ")}</h2>
          <p
            style={{
              lineHeight: "30px",
              letterSpacing: "1.3px",
              marginTop: "20px",
            }}
          >
            {t("aboutDes")}
          </p>
          <button className="btn btn-primary">
            {" "}
            {t("discoverNow")}
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <h1
        className="my-4 pt-4 text-secondary"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        {/* We provide and extend personalized & innovative <br /> healthcare
        services to its customers. */}
      </h1>
      <p>
        {/* We have recently organised a new office location at 33 Queens Square,
        Leeds to cater for the growth <br />
        of business for North of UK and Scotland locations. */}
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <div class="container row py-3 mt-5 mx-auto">
          <div class="col-sm-4 ">
            <div class="card bg-light">
              <div
                class="card-body "
                style={{
                  textAlign: "left",
                }}
              >
                <h3 class="card-title">
                  Our Promise
                  <FaHandsHelping className="mx-3 text-info fs-1" />
                </h3>
                <ul style={{ lineHeight: "40px" }}>
                  <li>Good Service </li>
                  <li> For Community</li>
                  <li> Long Term Development</li>
                  <li>Help People</li>
                  <li>Save Our Planet</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-4 ">
            <div class="card bg-light">
              <div
                class="card-body "
                style={{
                  textAlign: "left",
                }}
              >
                <h3 class="card-title">
                  Our Mission
                  <SiWorldhealthorganization className="mx-3 text-info fs-1" />
                </h3>
                <ul style={{ lineHeight: "40px" }}>
                  <li>Good Service </li>
                  <li> For Community</li>
                  <li> Long Term Development</li>
                  <li>Help People</li>
                  <li>Save Our Planet</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-4 ">
            <div class="card bg-light">
              <div
                class="card-body "
                style={{
                  textAlign: "left",
                }}
              >
                <h3 class="card-title">
                  Our Vision
                  <FaLowVision className="mx-3 text-info fs-1" />
                </h3>
                <ul style={{ lineHeight: "40px" }}>
                  <li>Good Service </li>
                  <li> For Community</li>
                  <li> Long Term Development</li>
                  <li>Help People</li>
                  <li>Save Our Planet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5 p-5 bg-primary text-white">
          <div className="col-3">
            <h5>
              <span className="  fw-bolder" style={{ fontSize: "50px" }}>
                <CountUp start={0} end={313} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </span>{" "}
            </h5>
            <p className="fs-3 fw-bolder">HAPPY CLIENTS</p>
          </div>
          <div className="col-3">
            <h5>
              <span className="  fw-bolder" style={{ fontSize: "50px" }}>
                <CountUp start={0} end={53} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </span>{" "}
            </h5>
            <p className="fs-3 fw-bolder">FINISHED PROJECT</p>
          </div>
          <div className="col-3">
            <h5>
              <span className="  fw-bolder" style={{ fontSize: "50px" }}>
                <CountUp start={0} end={43} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </span>{" "}
            </h5>
            <p className="fs-3 fw-bolder">EXPERTS</p>
          </div>
          <div className="col-3">
            <h5>
              <span className="  fw-bolder" style={{ fontSize: "50px" }}>
                <CountUp start={0} end={333} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </span>{" "}
            </h5>
            <p className="fs-3 fw-bolder">POSTS</p>
          </div>
        </div>

        <div>
          <h1
            className="my-4 pt-4 text-secondary"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Meet Our Professionals
          </h1>
          <p>
            When your mission is to be better, faster and smarter, you need the
            best people <br />
            driving your vision forward.
          </p>

          <div className="row g-2 py-5">
            <div className="col-3 ">
              {" "}
              <img src={team1} alt="" className="w-75" />
              <h4 className="my-2">Johnson Brown</h4>
              <small>Case Investigator</small>
              <h4>
                <span>
                  {" "}
                  <BsFacebook className="text-primary" />
                </span>
                <span className="mx-3 text-info">
                  {" "}
                  <BsTwitter />
                </span>
                <span>
                  {" "}
                  <BsInstagram />
                </span>
              </h4>
            </div>
            <div className="col-3">
              {" "}
              <img src={team2} alt="" className="w-75" />
              <h4 className="my-2">William John</h4>
              <small>Senior Doctor</small>
              <h4>
                <span>
                  {" "}
                  <BsFacebook className="text-primary" />
                </span>
                <span className="mx-3 text-info">
                  {" "}
                  <BsTwitter />
                </span>
                <span>
                  {" "}
                  <BsInstagram />
                </span>
              </h4>
            </div>
            <div className="col-3">
              {" "}
              <img src={team3} alt="" className="w-75" />
              <h4 className="my-2">Mrs Smith</h4>
              <small>Customer Service</small>
              <h4>
                <span>
                  {" "}
                  <BsFacebook className="text-primary" />
                </span>
                <span className="mx-3 text-info">
                  {" "}
                  <BsTwitter />
                </span>
                <span>
                  {" "}
                  <BsInstagram />
                </span>
              </h4>
            </div>
            <div className="col-3">
              {" "}
              <img src={team4} alt="" className="w-75" />
              <h4 className="my-2">Mrs. Sujana</h4>
              <small>Project Schedular</small>
              <h4>
                <span>
                  {" "}
                  <BsFacebook className="text-primary" />
                </span>
                <span className="mx-3 text-info">
                  {" "}
                  <BsTwitter />
                </span>
                <span>
                  {" "}
                  <BsInstagram />
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
