import "./Menu.css";
export default function Menu() {
  return (
    <ul>
      <li>
        <a href={"/europe"}>Europe</a>
      </li>
      <li>
        <a href={"/arctic"}>Arctic</a>
      </li>
      <li>
        <a href={"/sahara"}>Sahara</a>
      </li>
      <li>
        <a href={"rainforest"}>Rainforest</a>
      </li>
    </ul>
  );
}
