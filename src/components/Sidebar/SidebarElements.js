import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  /* background: #0d0d0d; */
  background: linear-gradient(45deg, #000000, #333333, #222222, #111111);
  background-size: 500% 500%;
  animation: background 10s ease infinite;
  height: 100vh;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 300ms ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")}; //Open and close menu
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; //Open and close from top
  z-index: 999;

  @keyframes background {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    75% {
      background-position: 50% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 100px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 70px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 200ms ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 200ms ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  font-weight: 500;
  background: #01bf71;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 200ms ease-in-out;
    background: #fff;
  }
`;

export const CartIcon = styled(IoMdCart)`
  @media screen and (max-width: 768px) {
    color: #fff;
    align-items: center;
    font-size: 40px;
    cursor: pointer;
  }
`;

export const ItemCount = styled.div`
  align-items: center;
  justify-content: center;
  padding: 1px 6px;
  margin-bottom: 50px;
  background: #fff;
  border-radius: 50%;
  font-size: 12px;
  color: #000;
  font-weight: 500;
`;