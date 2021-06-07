import React, { useState } from 'react';
import video from '../../videos/videoLow.mp4';
import {
    ArrowRight, HeroBg,
    HeroBtn,
    HeroBtnWrapper, HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    KeyArrow, VideoBg
} from './HeroElements.js';

const HeroSection = () => {
    const [hover,setHover] = useState(false);
    const onHover =() =>{
        setHover(!hover);
    }
    return (
        <div>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay='autoplay' muted loop='loop' src={video} type='video/mp4'></VideoBg>
                </HeroBg>

                <HeroContent>
                    <HeroH1>
                        Hey , This is your Web Doctor, Sajol!
                    </HeroH1>
                    <HeroP>
                        What are you waitng for man!?Stay connected with us and enjoy our webservices.
                    
                    </HeroP>
                    <HeroBtnWrapper>
                        <HeroBtn to='/' onMouseEnter={onHover}
                        onMouseLeave={onHover}>
                            Get Started  {hover  ? <ArrowRight/> : <KeyArrow/>}
                        </HeroBtn>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </div>
    )
}

export default HeroSection
