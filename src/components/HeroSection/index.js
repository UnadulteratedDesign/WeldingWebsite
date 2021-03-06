import React, {useState} from "react";
import { Button } from "../ButtonElement";
import Video from "../../videos/video2.mp4";
import Image from '../../images/black.jpg';
import './HeroElements.css';
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from "./HeroElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
      
      <img className="image111" src={Image} alt="" />
      
      <HeroContent>
        <HeroH1>Piedmont Welding and Fabrication LLC</HeroH1>
        <HeroP>Contact me today for a free consultation</HeroP>
        <HeroBtnWrapper>
          <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
