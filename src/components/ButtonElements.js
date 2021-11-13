import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in-out;
  border: none;
  outline: none;
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  margin-bottom: 10px;
  font-weight: 500;

  &:hover {
    transition: all 200ms ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
    cursor: pointer;
  }
`;
