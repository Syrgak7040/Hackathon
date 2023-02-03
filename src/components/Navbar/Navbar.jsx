import React, { useEffect, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import Catalog from "./CatalogDowns";
import DropDowns from "./DropDowns";
import "./Navbar.css";

const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState("");

  useEffect(() => {
    setSearchParams({
      q: value,
    });
  }, [value]);
  return (
    <div>
      <div>
        <div className="container">
          <div className="navbarTop">
            <div className="navbarTopLeft">
              <ul className="ulLeft">
                <Link className="a" to="/brand">
                  <li className="liLeft">БРЕНДЫ</li>
                </Link>

                <a
                  target="_blank"
                  className="a"
                  href="https://www.facebook.com/SportExpert.kg/"
                >
                  <li className="liLeft">FACEBOOK</li>
                </a>
                <a
                  target="_blank"
                  className="a"
                  href="https://www.instagram.com/sportexpert_kyrgyzstan/"
                >
                  <li className="liLeft">INSTAGRAM</li>
                </a>
              </ul>
            </div>
            <div className="navbarTopRight">
              <ul className="ulRight">
                <a
                  target="_blank"
                  className="a"
                  href="https://www.facebook.com/SportExpert.kg/"
                >
                  <li className="f">F</li>
                </a>
                <a
                  target="_blank"
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
                <Link to="/admin">
                  <button className="btnAdmin">
                    <img
                      className="adminLogo"
                      src={
                        "https://raw.githubusercontent.com/Syrgak7040/Hackathon/fbc782b216038b5d40048daad50f253eaa97cd76/src/components/svg/admin.svg"
                      }
                      alt=""
                    />
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbarCenter">
          {/* <div className="navbarCenterO"> */}
          <div className="navbarCenterLeft">
            <Link className="sss" to="/">
              <img
                className="logoSvg"
                src={
                  "https://raw.githubusercontent.com/Syrgak7040/Hackathon/fbc782b216038b5d40048daad50f253eaa97cd76/src/components/svg/logo.svg"
                }
                alt=""
              />
              <span className="sportExpert">SportExpert</span>
            </Link>
          </div>
          <div className="navbarCenterRight">
            <input
              className="inputNavbarCenter"
              type="text"
              placeholder="ㅤㅤ  Поиск товаров..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button className="btnMag">
              <img
                src={
                  "https://raw.githubusercontent.com/Syrgak7040/Hackathon/fbc782b216038b5d40048daad50f253eaa97cd76/src/components/svg/poisk.svg"
                }
                alt=""
              />
            </button>
            <div className="products"></div>
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

            <li className="lisss">КОНТАКТЫ</li>
            <li className="lisss">ГАЛЕРИЕ</li>
            <li className="lisss">
              <DropDowns />
            </li>
            <li className="lisss">
              <Link to={"/qwer"}>
                <button className="btnPlus">
                  <span>New Product</span>
                  <img
                    src={
                      "https://raw.githubusercontent.com/Syrgak7040/Hackathon/fbc782b216038b5d40048daad50f253eaa97cd76/src/components/svg/plus.svg"
                    }
                    alt=""
                  />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
