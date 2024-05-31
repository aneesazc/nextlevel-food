"use client";
import classes from "./nav-link.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  console.log(path);

  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${classes.link}  ${classes.active}` : ""
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
