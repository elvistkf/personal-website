import React from "react";
import styled from "styled-components";
import {FaLinkedinIn, FaGithub} from "react-icons/fa";
import {SiGooglescholar} from "react-icons/si";
import colourConfig from "../config/colourConfig";

const Container = styled.div`
    background-color: ${colourConfig.footer};
    padding: 2em 1em 2em 1em;
    border-top: 1px solid #464646;
    min-height: 7vh;
`

const FlexBox = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
`

const SocialBtn = styled.a`
    cursor: pointer; 
    border-radius: 100%;
    color: white;
    padding: 8px 8px 5px 8px;
    margin-left: 1.5em;
    margin-right: 1.5em;
    transition: background-color 0.5s;

    &:hover{
        background-color: #303030;
    }
`

const Copyright = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    color: #cccccc;
    margin-top: 1em;
    font-size: 12px;
`

function Footer() {
    return (
        <Container>
            <FlexBox>
                <SocialBtn href="https://www.linkedin.com/in/elviskftsang/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></SocialBtn>
                <SocialBtn href="https://github.com/elvistkf" target="_blank" rel="noopener noreferrer"><FaGithub/></SocialBtn>
                <SocialBtn href="https://scholar.google.com/citations?user=IPSwm9sAAAAJ" target="_blank" rel="noopener noreferrer"><SiGooglescholar /></SocialBtn>
            </FlexBox>
            <Copyright>© 2022 Elvis Tsang. All rights reserved.</Copyright>
        </Container>
    );
}

export default Footer;
