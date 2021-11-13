import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";
import { IoMdArrowDown } from "react-icons/io";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1000px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 24px;
  z-index: 3;
  border: 1px solid #fff;
  border-left-width: 3px;
  border-left-style: solid;
  border-left-color: transparent;
  border-right-width: 3px;
  border-right-style: solid;
  border-right-color: transparent;
  background: rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 480px) {
    border: none;
  }
`;

export const HeroH1 = styled.h1`
  font-size: 48px;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  font-size: 24px;
  color: #fff;
  margin-top: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForwardIos)`
  margin-left: 8px;
  font-size: 18px;
`;

export const ArrowDown = styled(IoMdArrowDown)`
  margin-left: 8px;
  font-size: 18px;
`;
