import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  height: 90px;
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 99;
  margin-top: -90px;

  @media screen and (max-width: 960px) {
    transition: 800ms all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

// export const NavLogo = styled(LinkRouter)`
//   color: #01bf71;
//   font-size: 3.5rem;
//   justify-self: flex-start;
//   display: flex;
//   align-items: center;
//   margin-left: 24px;
//   text-decoration: none;
//   cursor: pointer;
//   transition: all 300ms ease-in-out;

//   &:hover {
//     transition: all 300ms ease-in-out;
//     color: #fff;
//   }
// `;

export const NavLogo = styled(LinkRouter)`
  justify-self: flex-start;
  display: flex;
  align-items: center;
  margin-left: 24px;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 65%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 90px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 200ms ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

