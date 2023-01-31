import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Catalog() {
  return (
    <DropdownButton
      className="catalogDrop"
      id="dropdown-item-button"
      title="КАТАЛОГ"
    >
      {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
      <Dropdown.Item as="button">Туризмб Альпинизм</Dropdown.Item>
      <Dropdown.Item as="button">Лыжи</Dropdown.Item>
      <Dropdown.Item as="button">Сноуборд</Dropdown.Item>
      <Dropdown.Item as="button">Велоспорт</Dropdown.Item>
      <Dropdown.Item as="button">Скейты, ролики, коньки</Dropdown.Item>
      <Dropdown.Item as="button">Одежда</Dropdown.Item>
      <Dropdown.Item as="button">Обувь</Dropdown.Item>
      <Dropdown.Item as="button">Очки, аксессуары</Dropdown.Item>
      <Dropdown.Item as="button">Уход</Dropdown.Item>
    </DropdownButton>
  );
}

export default Catalog;
