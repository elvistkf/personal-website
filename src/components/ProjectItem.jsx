import React from "react";
import styled from 'styled-components';
import colourConfig from "../config/colourConfig";
import sortConfig from "../config/sortConfig";
// import tagConfig from '../config/tagConfig';
import Tag from "./Tag";

const BoxContainer = styled.div`
	border-radius: 0.5em;
	background-color: ${colourConfig.itemBox};
	width: 50%;
    height: auto;
	margin: auto;
    margin-bottom: 2em;
    position: relative;
    display: flex;
    padding: auto;
    justify-content: space-between;
    align-items: stretch;
    transition: background-color 0.25s;

    &:hover{
        background-color: ${colourConfig.itemBoxHover};
        cursor: ${props => props.hasUrl ? "pointer" : "default"};
    }

	@media screen and (min-width: 768px) and (max-width: 1200px) {
		width: 67.5%;
        font-size: 14px;
	}

	@media screen and (max-width: 768px) {
        width: 85%;
    }
`

const TextContainer = styled.div`
    margin: 2em 2em 2em 2em;
    /* max-height: 12em; */
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
    line-height: 150%;
    white-space: pre-line;
`

const TagContainer = styled.div`
    display: flex;
`

const ImageContainer = styled.img`
    /* width: auto; */
    /* max-height: 12em; */
    object-fit: cover;
    max-width: 18em;
    border-radius: 0 0.5em 0.5em 0;

    @media screen and (max-width: 768px) {
        visibility: hidden;
        width: 0;
    }
`

function ProjectItem(props) {
    const item = props.item;
    const tags = item.tags;
    const hasUrl = item.hasOwnProperty('url') && item.url != null;
    const hasSubTags = item.hasOwnProperty('subTags') && item.subTags != null;
    // tags.sort();
    tags.sort((a, b) => {
        return (sortConfig.tagOrders[a] || 100) - (sortConfig.tagOrders[b] || 100);
    })

    const subTags = hasSubTags ? item.subTags : null;

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
                        hasSubTags ? 
                        tags.map((tag, index) => (
                            <Tag text={tag} key={index} subtags={tag in subTags ? subTags[tag] : null} />
                        ))
                        :
                        tags.map((tag, index) => (
                            <Tag text={tag} key={index} />
                        ))
                    }
                </TagContainer>
            </TextContainer>
            <ImageContainer src={item.hasOwnProperty('img') ? item.img : ""} />
        </BoxContainer>
    )
}

export default ProjectItem