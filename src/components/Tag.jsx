import React from 'react'
import styled from 'styled-components'
import { increase_brightness } from '../common';
import tagConfig from '../config/tagConfig'

const Container = styled.div`
    border-radius: 1em;
    font-size: 10px;
    background-color: ${props => props.text in tagConfig.tagColours ? tagConfig.tagColours[props.text].bg : "#555555"};
    color: ${props => props.text in tagConfig.tagColours ? tagConfig.tagColours[props.text].text : "white"};
    width: max-content;
    padding: 4px 8px 4px 8px;
    margin-right: 1em;
    min-width: 4em;
    text-align: center;
    display: inline-block;
    z-index: 1;
    transition: background-color 0.25s;

    &:hover {
        background-color: ${props => 
            increase_brightness(props.text in tagConfig.tagColours ? tagConfig.tagColours[props.text].bg : "#555555", 
                                props.hasSubTags * 20)
        };
    }

    @media screen and (max-width: 768px) {
        width: max-content;
        overflow-wrap: break-word;
    }

    &:hover :not(:first-child) {
        visibility: visible;
        animation-name: fade;
        animation-duration: 0.5s;
    }
`;

const SubTagContainer = styled.div`
    border-radius: 1em;
    font-size: 10px;
    background-color: ${props => props.text in tagConfig.tagColours ? tagConfig.tagColours[props.text].bg : "#555555"};
    color: ${props => props.text in tagConfig.tagColours ? tagConfig.tagColours[props.text].text : "white"};
    width: min-content;
    padding: 4px 6px 4px 6px;
    min-width: 4.8em;
    text-align: center;
    display: inline-block;
    z-index: 1;

    @media screen and (max-width: 768px) {
        width: max-content;
        overflow-wrap: break-word;
    }

    position: absolute;
    visibility: hidden;
    transform: translate(${props => props.index * 110 - 40}%, 140%);
`

const Text = styled.span`
    display: inline-block;
    vertical-align: middle;
    margin: auto;
`

function Tag(props) {
    return (
        <Container text={props.text} hasSubTags={props.subtags ? 1 : 0}>
            <Text>{props.text}</Text>
            {
                props.subtags ?
                props.subtags.split(", ").map((tag, index) => (
                        <SubTagContainer index={index} text={props.text} key={index}>
                            <Text>{tag}</Text>
                        </SubTagContainer>
                    ))
                    :
                    <span></span>
            }
        </Container>
    )
}

export default Tag