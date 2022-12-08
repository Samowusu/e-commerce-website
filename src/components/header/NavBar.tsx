import React, { Component } from "react";
import { Typography } from "../commons/Typography";
import { theme } from "../../config/theme";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Nav = styled.nav`
  /* border: 1px solid black; */
  width: clamp(250px, 30%, 300px);
  padding: 0px 10px;
`;

const UL = styled.ul`
  /* border: 1px solid blue; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const Link = styled(NavLink).attrs((props) => ({
  style: props.style,
}))`
  /* border: 1px solid green; */
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryText};

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondaryText};
  }

  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.secondaryText};
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondaryText};
  }
`;

export class NavBar extends Component {
  render() {
    return (
      <Nav>
        <UL>
          <li>
            <Link
              to={"/"}
              style={({ isActive }) => {
                return isActive
                  ? {
                      color: theme.colors.secondaryText,
                      borderBottom: `3px solid ${theme.colors.secondaryText}`,
                    }
                  : {};
              }}
            >
              CLOTHES
            </Link>
          </li>
          <li>
            <Link
              to={"/tech"}
              style={({ isActive }) => {
                return isActive
                  ? {
                      color: theme.colors.secondaryText,
                      borderBottom: `3px solid ${theme.colors.secondaryText}`,
                    }
                  : {};
              }}
            >
              TECH
            </Link>
          </li>
        </UL>
      </Nav>
    );
  }
}
