import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function DropDowns() {
  return (
    <DropdownButton
      className="drop"
      id="dropdown-basic-button"
      title="ВЕБКАМЕРЫ"
    >
      <Dropdown.Item target="_blank" href="https://karakol-ski.kg/camera">
        Каракол
      </Dropdown.Item>
      <Dropdown.Item target="_blank" href="https://www.chunkurchak.kg/camera/">
        Чункурчак
      </Dropdown.Item>
      <Dropdown.Item target="_blank" href="https://kashka-suu.kg/web-camera">
        Кашка-Суу
      </Dropdown.Item>
      <Dropdown.Item
        target="_blank"
        href="http://www.orlovka.kg/media/web-camera"
      >
        Орловка
      </Dropdown.Item>
      <Dropdown.Item target="_blank" href="http://zil.kg/web-cam/">
        ЗИЛ
      </Dropdown.Item>
      <Dropdown.Item target="_blank" href="http://too-ashuu.kg/online-camera/">
        Тоо-Ашуу
      </Dropdown.Item>
      <Dropdown.Item target="_blank" href="https://shymbulak.com/cameras/">
        Чимбулак
      </Dropdown.Item>
      <Dropdown.Item
        target="_blank"
        href="https://www.travel-kyrgyzstan.com/ru/%D0%BB%D0%B0%D0%B3%D0%B5%D1%80%D1%8C-%D0%B6%D0%B5%D1%80%D0%B3%D0%B0%D0%BB%D0%B0%D0%BD-%D1%84%D1%80%D0%B8%D1%80%D0%B0%D0%B9%D0%B4-%D1%81%D0%BA%D0%B8%D1%82%D1%83%D1%80-%D0%BF%D0%BE%D1%85%D0%BE%D0%B4/"
      >
        Беккантри лагерь Жергалан
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default DropDowns;
