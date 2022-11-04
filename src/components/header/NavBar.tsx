import React, { Component } from "react";
import { Typography } from "../commons/Typography";
import { theme } from "../../config/theme";
import styled from "styled-components";

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

const LI = styled.li`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 30px;
  /* border-bottom: 3px solid ${({ theme }) => theme.colors.secondaryText}; */
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondaryText};
  }
`;

export class NavBar extends Component {
  render() {
    return (
      <Nav>
        <UL>
          <LI>
            <a>
              <Typography
                textTransform="uppercase"
                color={theme.colors.secondaryText}
              >
                Women
              </Typography>
            </a>
          </LI>
          <LI>
            <a>
              <Typography textTransform="uppercase">Men</Typography>
            </a>
          </LI>
          <LI>
            <a>
              <Typography textTransform="uppercase">Kids</Typography>
            </a>
          </LI>
        </UL>
      </Nav>
    );
  }
}
