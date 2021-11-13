import { Link } from "react-scroll";

import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #166d3b;
  background-image: linear-gradient(90deg, #166d3b 50%, #101522 50%);
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 24px;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 30px 0 30px 80px;
  width: 180px;
  box-sizing: border-box;

  @media screen and (max-width: 990px) {
    margin: 20px 0 20px 70px;
    width: 100%;
  }

  @media screen and (max-width: 440px) {
    margin: 15px 0 15px 15px;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 16px;
  margin-bottom: 16px;
  font-weight: 600;

  @media screen and (max-width: 440px) {
    font-size: 14px;
    margin-bottom: 14px;
  }
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 16px;

  @media screen and (max-width: 375px) {
    font-size: 11px;
  }

  &:hover {
    color: #01bf71;
    color: ${({ hover }) => (hover ? "#01bf71" : "#010606")};
    transition: 300ms ease-out;
    cursor: pointer;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  font-size: 16px;

  @media screen and (max-width: 440px) {
    font-size: 14px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 26px;
  transition: all 200ms ease-in-out;

  &:hover {
    transform: translateY(-5px);
    transition: all 200ms ease-in-out;
    opacity: 0.7;
    color: #01bf71;
  }
`;

