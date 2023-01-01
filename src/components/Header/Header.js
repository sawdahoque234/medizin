/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { AiOutlineSearch, AiOutlineUserAdd } from "react-icons/ai";
import Languageoption from "../Language-dropdown";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const handleClick = (e) => {
  i18next.changeLanguage(e.target.value);
  console.log(e);
};
const Header = () => {
  const { t } = useTranslation();

  return (
    <div>
      <nav class="navbar navbar-expand-lg mx-2 navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/" className="mx-4">
            <img src={logo} alt="" width="166px" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto">
              <Link class="nav-link" to="/">
                {t("home")}
              </Link>
              <Link class="nav-link" to="shop">
                {t("shop")}
              </Link>
              <Link class="nav-link" to="about">
                {t("about")}
              </Link>
              <Link class="nav-link" to="contact">
                {t("contact")}
              </Link>
            </div>
            <div class="navbar-nav mx-auto">
              <form class="d-flex h-75 mt-2">
                <input
                  class="form-control "
                  type="search"
                  placeholder={t("searchpd")}
                  aria-label="Search"
                />
                <button
                  class="btn btn-sm btn-outline-secondary w-50 mx-2"
                  type="button"
                >
                  {t("search")}
                  <AiOutlineSearch className="fs-5" />
                </button>
              </form>

              <span class="nav-link">
                <Languageoption onChange={(e) => handleClick(e)} />
              </span>
              <Link class="nav-link" to="login">
                <button class="btn btn-outline-primary " type="button">
                  {t("login")}
                  <AiOutlineUserAdd className="fs-5" />
                </button>
              </Link>
              <a href="hoque-medizin.netlify.app">
                <button class="btn btn-outline-primary " type="button">
                  {t("saudi")}
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
