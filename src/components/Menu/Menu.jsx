import "./Menu.css";
export default function Menu({ onLocationChange }) {
  const handleClick = (location) => {
    onLocationChange(location);
  };

  return (
    <ul className="menu-list">
      <li>
        <a href="#" onClick={() => handleClick("europe")}>
          Europe
        </a>
      </li>
      <li>
        <a href="#" onClick={() => handleClick("arctic")}>
          Arctic
        </a>
      </li>
      <li>
        <a href="#" onClick={() => handleClick("sahara")}>
          Sahara
        </a>
      </li>
      <li>
        <a href="#" onClick={() => handleClick("rainforest")}>
          Rainforest
        </a>
      </li>
    </ul>
  );
}
