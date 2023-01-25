import { Component } from "react";
import { Link, Nav, UL, navBarStyles } from "./NavBarStyles";

export class NavBar extends Component {
  render() {
    return (
      <Nav>
        <UL>
          <li>
            <Link to={"/"} style={navBarStyles.activeLink}>
              ALL
            </Link>
          </li>
          <li>
            <Link to={"/clothes"} style={navBarStyles.activeLink}>
              CLOTHES
            </Link>
          </li>
          <li>
            <Link to={"/tech"} style={navBarStyles.activeLink}>
              TECH
            </Link>
          </li>
        </UL>
      </Nav>
    );
  }
}
