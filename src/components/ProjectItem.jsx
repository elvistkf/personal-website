import React from "react";
import styled from 'styled-components';
import Tag from "./Tag";

const BoxContainer = styled.div`
	border-radius: 0.5em;
	background-color: #313131;
	width: 50%;
	margin: auto;
    margin-bottom: 2em;
	/* min-height: 15vh; */
    position: relative;
    display: flex;
    padding: auto;
    justify-content: space-between;
    transition: background-color 0.25s;

    &:hover{
        background-color: #414141;
        cursor: ${props => props.hasUrl ? "pointer" : "default"};
    }

	@media screen and (min-width: 768px) and (max-width: 1200px) {
		width: 67.5%;
        font-size: 14px;
	}

	@media screen and (max-width: 768px) {
        width: 75%;
    }
`

const TextContainer = styled.div`
    margin: 2em 2em 2em 2em;
`

const Title = styled.h2`
    margin: 0 0 0.5em 0;
`

const DescriptionContainer = styled.div`
    margin: 0 0 0 0;
    overflow: hidden;
    overflow-wrap: break-word;
    min-height: 2em;
    margin-bottom: 2em;
    /* @media screen and (max-width: 1200px) {
        margin-bottom: 2em;
    } */
`

const TagContainer = styled.div`
    display: flex;
    /* margin-bottom: 2em; */
    /* position: absolute;
    bottom: 1.75em; */
`

const ImageContainer = styled.img`
    /* border: 1px solid red; */
    width: auto;
    /* aspect-ratio: 1; */

    @media screen and (max-width: 768px) {
        visibility: hidden;
        width: 0;
    }
`

function ProjectItem(props) {
    const item = props.item;
    const tags = item.tags;
    const hasUrl = item.hasOwnProperty('url');
    tags.sort();

    return (
        <BoxContainer onClick={() => hasUrl ? window.open(item.url) : {}} hasUrl={hasUrl}>
            <TextContainer>
                <Title>
                    {item.title}
                </Title>
                <DescriptionContainer>
                    {item.description}
                </DescriptionContainer>
                <TagContainer>
                    {
                        tags.map((tag, index) => (
                            <Tag text={tag} key={index}></Tag>
                        ))
                    }
                </TagContainer>
            </TextContainer>
            <ImageContainer src={item.hasOwnProperty('img') ? item.img : require('../assets/logo192.png')} />
        </BoxContainer>
    )
}

export default ProjectItem