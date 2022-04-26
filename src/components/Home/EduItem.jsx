import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    margin-top: ${props => !props.first ? "1em" : "0em"};
    margin-right: 2em;
    /* width: 50%; */
    /* border: 1px solid blue; */

    @media screen and (max-width: 1000px) {
        margin-right: 1em;
    }
    /* width: 100%; */
    /* max-width: 80%; */
`

const Icon = styled.div`
    margin-right: 1em;
    font-size: 20px;
`

const ItemsContainer = styled.div`
    width: 100%;
`

const DegreeContainer = styled.div`
    display: flex;
    align-items: flex-start;
    
`

const Degree = styled.div`
    margin-bottom: 0.5em;
    margin-right: 2em;
    /* border: 1px solid red; */

    @media screen and (max-width: 1200px) {
        font-size: 12px;
    }
    /* width: fit-content; */
    width: fit-content;
`

const Year = styled.div`
    /* width: 20em; */
    min-width: 6.5em;
    margin-left: auto;
    text-align: right;
    /* border: 1px solid red; */
    overflow-wrap: normal;
    max-height: 20px;
    
    @media screen and (max-width: 1200px) {
        font-size: 12px;
        min-width: 6em;
    }

    @media screen and (max-width: 768px) {
        visibility: hidden;
        width: 0;
        height: 0;
    }
`

const Institution = styled.div`
    @media screen and (max-width: 1200px) {
        font-size: 12px;
    }
    width: auto;
    margin: auto;
`

function EduItem(props) { 
  return (
    <Container first={props.first}>
        <Icon><FaGraduationCap /></Icon>
        <ItemsContainer>
            <DegreeContainer>
                <Degree>{props.item.degree + " in " + props.item.subject}</Degree>
                <Year>{props.item.startYear + " - " + String(props.item.hasOwnProperty('endYear') ? props.item.endYear : "Present")}</Year>
            </DegreeContainer>
            <Institution>{props.item.institution}</Institution>
        </ItemsContainer>
    </Container>
  )
}

export default EduItem