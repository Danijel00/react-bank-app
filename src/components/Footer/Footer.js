import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
              <FooterLink to="/">Team</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Personal Banking</FooterLinkTitle>
              <FooterLink hover="false" to="/">
                Checking
              </FooterLink>
              <FooterLink hover="false" to="/">
                Savings
              </FooterLink>
              <FooterLink hover="false" to="/">
                Money Market
              </FooterLink>
              <FooterLink hover="false" to="/">
                Certificates of Deposit
              </FooterLink>
              <FooterLink hover="false" to="/">
                Credit Card
              </FooterLink>
            </FooterLinksItems>
            <FooterLinksItems hover="false">
              <FooterLinkTitle>Business Banking</FooterLinkTitle>
              <FooterLink hover="false" to="/">
                Checking
              </FooterLink>
              <FooterLink hover="false" to="/">
                Business Loans
              </FooterLink>
              <FooterLink hover="false" to="/">
                Credit Cards
              </FooterLink>
              <FooterLink hover="false" to="/">
                Merchant Services
              </FooterLink>
              <FooterLink hover="false" to="/">
                Money Market
              </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              {/*Year will update automatically*/}
              Syndicate Credit Union © {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                <AiFillInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
