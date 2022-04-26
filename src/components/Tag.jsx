import React from 'react'
import styled from 'styled-components'
import tagConfig from '../config/tagConfig'

const Container = styled.div`
    border-radius: 1em;
    font-size: 10px;
    background-color: ${props => props.text in tagConfig.tagColours ? tagConfig.tagColours[props.text].bg : "#555555"};
    color: ${props =>  props.text in tagConfig.tagColours ? tagConfig.tagColours[props.text].text : "white"};
    width: max-content;
    padding: 4px 8px 4px 8px;
    margin-right: 1em;
    min-width: 4em;
    text-align: center;
    display: inline-block;
    z-index: 10;

    &:hover {
        /* background-color: red; */
    }

    @media screen and (max-width: 768px) {
        width: max-content;
        overflow-wrap: break-word;
    }
`;

const Text = styled.span`
    display: inline-block;
    vertical-align: middle;
    margin: auto;
`

function Tag(props) {
    
    return (
        <Container text={props.text}>
            <Text>{props.text}</Text>
        </Container>
    )
}

export default Tag