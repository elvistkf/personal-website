import React from 'react'
import styled from 'styled-components'
import colourConfig from '../../config/colourConfig'
import fontConfig from '../../config/fontConfig'
import degrees from '../../data/education/degrees'
import PageTitle from '../PageTitle'
import EduItem from './EduItem'

const BackgroundContainer = styled.div`
    padding-top: 5em;
    padding-bottom: 5em;
    color: ${fontConfig.global.colour};
    animation: fade 0.5s ease-in;
    /* border-bottom: 1px solid ${colourConfig.divider}; */

    @media screen and (max-width: 768px) {
        padding-top: 2em;
        /* padding-bottom: 2em; */
    }
`

const SubContainer = styled.div`
    width: 1250px;
    margin: auto;
    /* border: 1px solid green; */
    display: flex;

    @media screen and (max-width: 768px) {
        width: 80%;
    }

    @media screen and (max-width: 1201px) {
        flex-direction: column;
    }

    @media screen and (max-width: 1500px) and (min-width: 769px) {
        width: 75%;
    }
`

const LeftContainer = styled.div`
    @media screen and (min-width: 1201px) {
        padding-right: 10em;
    }
`

const RightContainer = styled.div`
    border-radius: 1em;
    background-color: ${colourConfig.itemBox};
    /* width: auto; */
    padding: 2em;
    padding-right: 0em;
    margin: auto;

    @media screen and (max-width: 768px) {
        width: auto;
        padding: 1em; 
        /* padding-right: 0em;  */
    }

    @media screen and (min-width: 1201px){
        width: auto;
    }
`

function HomeEducation() {
  return (
    <BackgroundContainer>
        <SubContainer>
            <LeftContainer>
                <PageTitle title="Education"></PageTitle>
            </LeftContainer>
            <RightContainer>
                {/* <EduItem first="true"></EduItem>
                <EduItem></EduItem> */}
                {
                    degrees.map((item, index) => (
                        <EduItem item={item} first={index === 0} key={index}/>
                    )) 
                }
            </RightContainer>
        </SubContainer>
    </BackgroundContainer>
  )
}

export default HomeEducation