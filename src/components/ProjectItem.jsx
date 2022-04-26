import React from "react";
import styled from 'styled-components';
import colourConfig from "../config/colourConfig";
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
        /* background-color: #414141; */
        background-color: ${colourConfig.itemBoxHover};
        /* opacity: 50%; */
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

// const ImageContainer = styled.div`
//     /* width: 100%; */
//     height: auto;
//     width: auto;
//     /* max-height: 12em; */

//     border-radius: 0 0.5em 0.5em 0;
//     border: 1px solid red;

//     /* background: ${props => props.img} no-repeat center center / contain; */
//     /* background: pink url(//dummyimage.com/300) no-repeat center center / contain; */
//     /* background: green; */
//     z-index: 100;
//     @media screen and (max-width: 768px) {
//         visibility: hidden;
//         width: 0;
//     }
// `

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
            {/* <ImageContainer img={item.hasOwnProperty('img') ? item.img : '../assets/logo192.png'}/> */}
        </BoxContainer>
    )
}

export default ProjectItem