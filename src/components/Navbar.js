import React from "react";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import { useTranslation, Link, useI18next } from "gatsby-plugin-react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const { languages, changeLanguage } = useI18next();
  const { nav } = t("header", { returnObjects: true });
  console.log(nav);
  console.log(i18n.language);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </Link>
        </div>
        <ul className="navbar-start has-text-centered">
          {nav.map(({ id, name }) => {
            return (
              <li key={id} className="shrink-0 last:mr-0">
                <Link className="navbar-item" to={`${id}`}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="navbar-end has-text-centered">
          <a
            className="navbar-item"
            href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={github} alt="Github" />
            </span>
          </a>
        </div>
        <ul className="languages">
          {languages.map((lng) => (
            <li key={lng}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  changeLanguage(lng);
                }}
              >
                {lng}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
