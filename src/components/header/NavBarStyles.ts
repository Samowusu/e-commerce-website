import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../config/theme";

export const Nav = styled.nav`
  width: clamp(250px, 30%, 300px);
  padding: 0px 10px;
`;

export const UL = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const Link = styled(NavLink).attrs((props) => ({
  style: props.style,
}))`
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

export const navBarStyles = {
  activeLink: ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? {
          color: theme.colors.secondaryText,
          borderBottom: `3px solid ${theme.colors.secondaryText}`,
        }
      : {};
  },
};
