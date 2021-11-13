import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import {
  MobileIcon,
  Nav,
  NavBarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import image from "../../images/bank.png";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 90) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavBarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          {/* <BsBank2 /> */}
          <img src={image} alt="logo" />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-90}
            >
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="discover"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-90}
            >
              Discover
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-90}
            >
              Services
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="signup"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-90}
            >
              Sign-Up
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign-In</NavBtnLink>
        </NavBtn>
      </NavBarContainer>
    </Nav>
  );
};

export default Navbar;
