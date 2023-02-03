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
    m: "10px  30px 20px 20px",
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
      <div className={cl.footer}>
        <Grid container spacing={3} columns={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs>
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
          <Grid item xs={0}>
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
          <Grid item xs>
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
      </div>
    </div>
  );
};

export default Footer;
