import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import cl from "./Carousel.module.css";

const Carousel1 = () => {
  return (
    <div>
      <div className={cl.car__box}>
        <Carousel>
          <Carousel.Item className={cl.customitem} interval={1500}>
            <img
              className="d-block w-100"
              src="https://wallpapers-hub.art/wallpaper-images/16932.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={cl.customitem} interval={1500}>
            <img
              className="d-block w-100"
              src="https://www.gannett-cdn.com/presto/2022/02/07/USAT/4480a221-e1dd-49e1-bb70-73e39c7a10e0-USATSI_17633115.jpg?crop=3132,2088,x0,y0"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={cl.customitem}>
            <img
              className="d-block w-100"
              src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(639x612:641x610)/origin-imgresizer.eurosport.com/2022/12/07/3504361-71434388-2560-1440.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className={cl.car__right}>
          <img
            className={cl.car__r}
            src="https://57hours.com/wp-content/uploads/2019/11/Winter-camping-888x592.jpg"
            alt=""
          />
          <img
            className={cl.car__r2}
            src="https://inkaexpediciones.com/wp-content/uploads/2015/03/piolet2.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
