import { NavLink } from "react-router-dom";

const Nav: React.FC = () => (
  <nav>
    <ul>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/confession"}>Confession</NavLink>
      </li>
      <li>
        <NavLink to={"/misdemeanour"}>Misdemeanour</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
