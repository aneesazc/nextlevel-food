import Link from "next/link";

import logoImg from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import Image from "next/image";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image
          src={logoImg}
          alt="A plate with food on it"
          width={100}
          height={100}
          priority
        />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
