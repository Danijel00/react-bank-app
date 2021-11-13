import React, { useState } from "react";
import {
  ArrowForward,
  ArrowDown,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  //Set the state to false
  const [hover, setHover] = useState(false);

  //Current state will go from false to true
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up today and receive $200 in credit towards your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            primary="true"
            dark="true"
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true} /*Smooth scrolling*/
            duration={500}
            spy={true}
            exact="true"
            offset={-90} /*Because the header height is 90px */
          >
            Get started {hover ? <ArrowDown /> : <ArrowForward />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
