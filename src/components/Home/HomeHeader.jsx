import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGooglescholar } from 'react-icons/si'
import styled from 'styled-components'
import colourConfig from '../../config/colourConfig'
import fontConfig from '../../config/fontConfig'

const BackgroundContainer = styled.div`
    padding-top: 5em;
    padding-bottom: 5em;
    color: ${fontConfig.global.colour};
    animation: fade 0.5s ease-in;
    border-bottom: 1px solid ${colourConfig.divider};
`

const HeaderBox = styled.div`
    /* width: 55%; */
    width: 1200px;
    background-color: ${colourConfig.homeHeader};
    margin: auto;
    padding: 2em;
    min-height: 30vh;
    border-radius: 1em;
    display: flex;
    overflow: wrap;

    @media screen and (max-width: 768px) {
        width: 75%;
        padding: 1.75em;
    }

    @media screen and (max-width: 1500px) and (min-width: 769px) {
        width: 80%;
    }
`

const TextContainer = styled.div`
    overflow: wrap;
    /* border: 1px solid red; */

    @media screen and (min-width: 1000px) {
        margin-left: 3em;
    }
`

const Name = styled.div`
    font-size: ${fontConfig.homeMyName.size};
    font-weight: ${fontConfig.homeMyName.fontWeight};
    margin-bottom: 0.25em;
`

const Roles = styled.div`
    margin-bottom: 2em;
    color: ${fontConfig.homeRoles.colour};
    font-size: ${fontConfig.homeRoles.size};
    font-weight: ${fontConfig.homeRoles.fontWeight};
`

const Description = styled.div`
    line-height: 150%;
    /* margin-right: 2.5em; */
    margin-bottom: 2em;
    overflow: wrap;
    overflow-wrap: break-word;
    font-size: ${fontConfig.homeDescription.size};

    @media screen and (max-width: 768px) {
        font-size: ${fontConfig.homeDescription.mobileSize};
    }

    @media screen and (min-width: 769px) and (max-width: 1000px) {
        margin-right: 0em;
    }
`

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
`

// const MobileTitle = styled.div`
//     height: 0;
//     visibility: hidden;

//     @media screen and (max-width: 768px) {
//         height: auto;
//         width: max-content;
//         color: #2c7da0;
//         margin-bottom: 0.5em;
//         font-size: ${fontConfig.homeRoles.size};
//         font-weight: ${fontConfig.homeRoles.fontWeight};
//         visibility: visible;
//     }
// `

// const Title = styled.div`
//     width: max-content;
//     color: #2c7da0;
//     margin-bottom: 0.5em;
//     font-size: ${fontConfig.homeRoles.size};
//     font-weight: ${fontConfig.homeRoles.fontWeight};
//     visibility: visible;

//     @media screen and (max-width: 768px) {
//         visibility: hidden;
//         width: 0;
//         height: 0;
//     }
// `

const ImageContainer = styled.img`
    aspect-ratio: 1;
    border-radius: 100%;
    /* border: 1px solid red; */
    /* margin: auto; */
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    max-width: 250px;
    visibility: visible;

    @media screen and (max-width: 1000px) {
        visibility: hidden;
        width: 0;
    }
`

const LinkContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 0.5em;
    margin-top: auto;
`

const LinkBtn = styled.div`
    border-radius: 0.5em;
    background-color: ${props => props.colour};
    padding: 10px;
    width: max-content;
    display: flex;
    align-items: center;
    margin-right: 1em;
    opacity: 75%;
    &:hover{
        cursor: pointer;
        opacity: 100%;
    }
    font-size: 14px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

const LinkText = styled.div`
    margin-left: 0.5em;
    font-weight: bold;

`

function HomeHeader() {
    return (
        <BackgroundContainer>
            <HeaderBox>
                <LeftContainer>
                    <ImageContainer src={require('../../assets/photo.jpg')} />
                    {/* <shortBioContainer> */}
                        {/* <Title>Ph.D. Candidate</Title>
                        <Title>KTH Royal Institute of Technology</Title> */}
                    {/* </shortBioContainer> */}
                </LeftContainer>
                <TextContainer>
                    <Name>Elvis Tsang</Name>
                    {/* <Title>Ph.D. Candidate, KTH Royal Institute of Technology</Title>
                    <MobileTitle>Ph.D. Candidate</MobileTitle>
                    <MobileTitle>KTH Royal Institute of Technology</MobileTitle> */}
                    <Roles>Aspiring Data Analyst</Roles>
                    <Description>
                        I am a Ph.D. candidate in Electrical Engineering with focus on Decision Making in Distributed Systems, inspired by Optimisation, Machine Learning and Data-Driven approaches.
                        <br /><br />
                        Currently seeking career opportunities as a Data Analyst in Toronto, Ontario.
                    </Description>
                    <LinkContainer>
                        <LinkBtn colour="RoyalBlue" onClick={() => window.open("https://www.linkedin.com/in/elviskftsang/")}>
                            <FaLinkedin />
                            <LinkText>Linkedin</LinkText>
                        </LinkBtn>
                        <LinkBtn colour="RebeccaPurple" onClick={() => window.open("https://github.com/elvistkf")}>
                            <FaGithub />
                            <LinkText>GitHub</LinkText>
                        </LinkBtn>
                        <LinkBtn colour="Coral" onClick={() => window.open("https://scholar.google.com/citations?user=IPSwm9sAAAAJ")}>
                            <SiGooglescholar />
                            <LinkText>Google Scholar</LinkText>
                        </LinkBtn>
                        <LinkBtn colour="OrangeRed" onClick={() => window.open("mailto:kfetsang@kth.se")}>
                            <FaEnvelope />
                            <LinkText>Email</LinkText>
                        </LinkBtn>
                    </LinkContainer>
                </TextContainer>
            </HeaderBox>
        </BackgroundContainer>
    )
}

export default HomeHeader