import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';
import { SiTiktok } from "react-icons/si";
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';
import { animateScroll as scroll} from 'react-scroll';

const Footer = () => {
    const toggleHome = ()=> {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                                <FooterLink to="/whitepaper">How it works</FooterLink>
                                <FooterLink to="/whitepaper">Team</FooterLink>
                                <FooterLink to="/whitepaper">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                                <FooterLink to="/whitepaper">How it works</FooterLink>
                                <FooterLink to="/whitepaper">Team</FooterLink>
                                <FooterLink to="/whitepaper">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                                <FooterLink to="/whitepaper">How it works</FooterLink>
                                <FooterLink to="/whitepaper">Team</FooterLink>
                                <FooterLink to="/whitepaper">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                                <FooterLink to="/whitepaper">How it works</FooterLink>
                                <FooterLink to="/whitepaper">Team</FooterLink>
                                <FooterLink to="/whitepaper">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Babatunde
                        </SocialLogo>
                        <WebsiteRights>Babatunde © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Tiktok">
                                <SiTiktok />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Telegram">
                                <FaTelegram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
