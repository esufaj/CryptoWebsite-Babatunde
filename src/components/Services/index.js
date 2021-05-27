import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/tothemoon.png';
import Icon3 from '../../images/tothemoon2.jpg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>We offer</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Low Prices</ServicesH2>
                    <ServicesP>Lower fees due to using BNB blockchain</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Moon Babatunde</ServicesH2>
                    <ServicesP>Help babatunde reach the moon</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Be part of the movement</ServicesH2>
                    <ServicesP>You snooze you lose</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
