import { Grid, Typography } from "@mui/material";
import React from "react";
import cl from "./Bottom.module.css";

const Bottom = () => {
  return (
    <div>
      <div
        className={cl.box}
        sx={{ width: "1550px" }}
        style={{
          backgroundImage:
            "url(https://www.centerformentalhealth.in/wp-content/uploads/2021/01/beautiful-scenery-rocky-mountains-with-green-landscape-cloudy-sky-1.jpg)",
        }}
      >
        <div className={cl.text__back}></div>
        <Typography sx={{ width: "600px", pt: "40px", pb: "40px" }}>
          Мы не просто продаем одежду и снаряжение для активных видов спорта на
          природе, наша команда влюблена в горы. Мы знаем о них все и
          профессионально занимаемся многими видами горного спорта.
          Сотрудничество с ведущими спортивными брендами, участие в
          международных выставках, экспедициях, тестирование снаряжения – это
          опыт и знания, которыми мы гордимся и с удовольствием делимся.
          Опираясь на них, нами сделан выбор в пользу определенных известных
          мировых брендов, официальным дистрибьютором которых «Sport Expert»
          является более 13 лет. Учитывая Ваши пожелания и наш опыт – покупка в
          нашей компании будет не только приятной, но и полезной. Выбирая
          высокотехнологичную одежду, экипировку для горных лыж или сноуборда,
          велосипед, палатку, спальный мешок, рюкзак или снаряжение для
          альпинизма вы начнете свое увлекательное путешествие уже с порога
          нашего магазина. Спорт Эксперт — это не только снаряжение, но и
          единомышленники у которых можно получить Экспертный совет. Наш магазин
          — это не просто красивая выкладка товара в четырех стенах!
        </Typography>
      </div>
      <div className={cl.insta__header}>
        <div className={cl.inner__insta}>
          <h2>INSTAGRAM</h2>
          <hr />
        </div>
        <div>
          <a href="https://www.instagram.com/reebok/" target="_blank">
            <Typography variant="h5" component="h2">
              @reebok
            </Typography>
          </a>
          <div className={cl.insta__imgs}>
            <Grid container spacing={3}>
              <a
                href="https://www.instagram.com/p/Cjiien5LF0R/"
                target="_blank"
              >
                <img
                  className={cl.reebok}
                  src="https://cdn.zando.co.za/p/410058-4061-850014-1-zoom.jpg"
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/p/CkHJdjTJpA0/"
                target="_blank"
              >
                <img
                  className={cl.reebok}
                  src="https://z2photorankmedia-a.akamaihd.net/media/c/5/p/c5pqay4/normal.jpg"
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/p/CkgyYEGP29m/"
                target="_blank"
              >
                <img
                  className={cl.reebok}
                  src="https://www.grandinettisport.com/pub/media/catalog/product/cache/ce839fe888c38210e51d91bbee82a72d/r/e/reebok-pump-omni-lite-m41447.jpg"
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/p/Ck_sD7yuDSB/"
                target="_blank"
              >
                <img
                  className={cl.reebok}
                  src="https://images.dsw.com/is/image/DSWShoes/P221401_header_reebok-mobile?impolicy=qlt-medium&imwidth=768&imdensity=1"
                  alt=""
                />
              </a>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
