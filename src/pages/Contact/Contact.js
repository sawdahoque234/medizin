import React from "react";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <h1
        className="my-4 pt-4 text-secondary"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        We're always eager to hear from you!
      </h1>
      <p>
        You can call us in working time or visit our office. All mails will get
        the response within 24 <br />
        hours. Love to hear from you!
      </p>

      <div className="row py-4 ">
        <div className="col-4 my-4">
          <h3>
            {" "}
            <FaMapMarkerAlt className="text-success" /> Address
          </h3>
          <h6>
            ABC Road,123 <br /> Chittagong Bangladesh
          </h6>
        </div>
        <div className="col-4 my-4">
          <h3>
            {" "}
            <FaPhone className="text-primary" /> Contact
          </h3>
          <h6>
            Mobile: +88019999999 <br />
            Hotline: 18808 - 190103 <br /> Mail: support@mail.com
          </h6>
        </div>
        <div className="col-4 my-4">
          <h3>
            {" "}
            <FaClock className="text-primary" /> Hour of operation
          </h3>
          <h6>
            Monday - Friday: 09:00 - 20:00 <br /> Sunday & Saturday: 10:30 -
            22:00
          </h6>
        </div>
        <h1
          className="my-4 pt-4 "
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Ask us Anything Here
        </h1>
      </div>
      <div className="w-75 mx-auto">
        <div class="mb-3 w-50 m-auto">
          <input
            type="name"
            class="form-control bg-light"
            id="exampleFormControlInput1"
            placeholder="Your name"
          />
        </div>
        <div class="mb-3 w-50 mx-auto">
          <input
            type="email"
            class="form-control bg-light"
            id="exampleFormControlInput1"
            placeholder="Your email"
          />
        </div>
        <div class="mb-3 w-50 mx-auto">
          <input
            type="text"
            class="form-control bg-light"
            id="exampleFormControlInput1"
            placeholder="Subject"
          />
        </div>
        <div class="mb-3  w-50 mx-auto">
          <textarea
            class="form-control bg-light"
            placeholder="Message"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <div class="mb-3  w-50 mx-auto mb-5">
          <button className="btn btn-primary">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
