import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
  const activeClassName = "nav__a nav__a--active";
  const inactiveClassName = "nav__a";

  const iconOnClick = () => {
    const nav = document.querySelector(".nav");
    const icon = document.querySelector(".nav__a--icon");
    if (nav != null && icon != null) {
      if (nav.className === "nav") {
        nav.className = "nav nav--responsive";
        icon.innerHTML = "-";
      } else {
        nav.className = "nav";
        icon.innerHTML = "+";
      }
    }
  };

  return (
    <nav className="nav">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? activeClassName : inactiveClassName
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/confession"}
        className={({ isActive }) =>
          isActive ? activeClassName : inactiveClassName
        }
      >
        Confession
      </NavLink>
      <NavLink
        to={"/misdemeanour"}
        className={({ isActive }) =>
          isActive ? activeClassName : inactiveClassName
        }
      >
        Misdemeanour
      </NavLink>
      <a className="nav__a--icon" onClick={iconOnClick}>
        +
      </a>
    </nav>
  );
};

export default Nav;
