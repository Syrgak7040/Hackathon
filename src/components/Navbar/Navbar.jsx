import React from "react";
import { Link } from "react-router-dom";
import navbarCss from "././Navbar.css";
import logo from "./../svg/logo.svg";
import poisk from "./../svg/poisk.svg";
import bars from "./../svg/bars.svg";
import DropDowns from "./DropDowns";
import Catalog from "./CatalogDowns";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="navbarTop">
          <div className="navbarTopLeft">
            <ul className="ulLeft">
              <Link className="a" to="/brand">
                <li className="liLeft">БРЕНДЫ</li>
              </Link>

              <a className="a" href="https://www.facebook.com/SportExpert.kg/">
                <li className="liLeft">FACEBOOK</li>
              </a>
              <a
                className="a"
                href="https://www.instagram.com/sportexpert_kyrgyzstan/"
              >
                <li className="liLeft">INSTAGRAM</li>
              </a>
            </ul>
          </div>
          <div className="navbarTopRight">
            <ul className="ulRight">
              <a className="a" href="https://www.facebook.com/SportExpert.kg/">
                <li className="f">F</li>
              </a>
              <a
                className="a"
                href="https://www.instagram.com/sportexpert_kyrgyzstan/"
              >
                <li>
                  <img
                    className="instagramLogo"
                    src="https://avatars.mds.yandex.net/i?id=2d0c05d9259a3b80538bfe8eaca2346db018dfdf-5889001-images-thumbs&n=13"
                    alt="instagram"
                  />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbarCenter">
        {/* <div className="navbarCenterO"> */}
        <div className="navbarCenterLeft">
          <Link to="/">
            <img className="logoSvg" src={logo} alt="" />
            <span className="sportExpert">SportExpert</span>
          </Link>
        </div>
        <div className="navbarCenterRight">
          <input
            className="inputNavbarCenter"
            type="text"
            placeholder="ㅤㅤ  Поиск товаров..."
          />
          <button className="btnMag">
            <img src={poisk} alt="" />
          </button>
          {/* </div> */}
        </div>
      </div>
      <div className="navbarBottom">
        <ul>
          <li className="liKatalog">
            {/* <img src={bars} alt="" /> */}
            <Catalog />
          </li>
        </ul>
        <ul className="links">
          <li className="lisss">НОВОЕ ПОСТУПЛЕНИЕ</li>
          <li className="lisss">СКИДКИ</li>
          <li className="lisss">БУТФИТИНГ</li>
          <li className="lisss">РЕМОНТ</li>
          <li className="lisss">КОНТАКТЫ</li>
          <li className="lisss">ГАЛЕРИЕ</li>
          <li className="lisss">
            <DropDowns />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
