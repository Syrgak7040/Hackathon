import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box, Container, style } from "@mui/system";
import React from "react";
import cl from "./Footer.module.css";
import Divider from "@mui/material/Divider";
const Footer = () => {
  const style = {
    width: "100%",
    maxWidth: 360,
  };

  const aboutus = {
    color: "gray",
    mt: "10px",
    ml: "30px",
    mr: "20px",
  };
  const text__default = {
    color: "white",
    mt: "10px",
    mb: "30px",
  };
  const text__gray = {
    color: "gray",
    mt: "10px",
  };
  const contacts = {
    color: "gray",
    mt: "10px",
    mb: "30px",
  };
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
          <div>
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

      <Box
        sx={{
          width: 1550,
          height: 600,
          backgroundColor: "rgb(40, 40, 40)",
          mt: "100px",
        }}
      >
        <Grid container spacing={3}>
          <Grid xs>
            <List
              sx={(style, { ml: "40px" })}
              component="nav"
              aria-label="mailbox folders"
            >
              <Typography variant="h4" component="h2" sx={text__default}>
                О нас
              </Typography>
              <Typography variant="h4" component="h2" sx={text__default}>
                Makers Sport
              </Typography>
              <Typography sx={aboutus}>
                Мы не просто продаем одежду и снаряжение для активных видов
                спорта на природе, наша команда влюблена в горы. Мы знаем о них
                все и профессионально занимаемся многими видами горного спорта.
                Учитывая Ваши пожелания и наш опыт – покупка в нашей компании
                будет не только приятной, но и полезной. Выбирая
                высокотехнологичную одежду, экипировку для горных лыж или
                сноуборда, велосипед, палатку, спальный мешок, рюкзак или
                снаряжение для альпинизма вы начнете свое увлекательное
                путешествие уже с порога нашего магазина. Спорт Эксперт — это не
                только снаряжение, но и единомышленники у которых можно получить
                Экспертный совет. Наш магазин — это не просто красивая выкладка
                товара в четырех стенах!
              </Typography>
            </List>
          </Grid>
          <Grid xs={-1}>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <Typography variant="h4" component="h2" sx={text__default}>
                контакты:
              </Typography>
              <Typography sx={contacts}>
                +996 999 77-77-77, +996 550 55-55-55
              </Typography>
              <Typography sx={contacts}>makerssport@yandex.ru</Typography>
              <Typography sx={contacts}>Ежедневно: 09:00–19:00</Typography>
              <div>
                <a
                  href="https://www.instagram.com/sportexpert_kyrgyzstan/"
                  target="_blank"
                >
                  <img
                    className={cl.insta}
                    src="https://www.pngplay.com/wp-content/uploads/12/Instagram-Logo-Transparent-PNG.png"
                  />
                </a>
              </div>
            </List>
          </Grid>
          <Grid xs>
            <Typography variant="h4" component="h2" sx={text__default}>
              мы на карте:
            </Typography>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  class="gmap_iframe"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=420&amp;height=256&amp;hl=en&amp;q=makers kg&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <a href="https://pdflist.com/" alt="pdflist.com"></a>
              </div>
              <style>
                {
                  "position:relative;text-align:right;width:420px;height:256px;}.gmap_canvas {overflow:hidden;background:none!important;width:420px;height:256px;}.gmap_iframe {width:420px!important;height:256px!important"
                }
              </style>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
