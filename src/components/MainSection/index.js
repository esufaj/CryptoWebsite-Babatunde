import React, { useState } from 'react';
import Video from '../../video/video.mp4';
import { Button } from '../ButtonElement'
import { MainContainer, MainBg, VideoBg, MainContent, MainH1, MainP, MainBtnWrapper, ArrowForward, ArrowRight} from './MainElements';


const MainSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <MainContainer id='home'>
            <MainBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </MainBg>
            <MainContent>
                <MainH1>Help Babatunde save Africa</MainH1>
                <MainP>
                    Buy in with the button below and help Babatunde reach the Moon
                </MainP>
                <MainBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Buy In {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </MainBtnWrapper>
            </MainContent>
        </MainContainer>
    )
}

export default MainSection
