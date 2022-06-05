import React from 'react'
import styled from 'styled-components';
import colourConfig from '../config/colourConfig';
import fontConfig from '../config/fontConfig';
import tagConfig from '../config/tagConfig';
import Tag from './Tag';

const innerMargin = "5px";

const Container = styled.div`
    display: flex;
    max-width: 100%;
    margin-bottom: ${props => props.id === 1 ? "0em" : "0.5em"};
    border-radius: 0.5em;
    padding: 5px 5px 5px 5px;
    transition: background-color 0.25s;
    align-items: flex-start;

    &:hover {
        /* background-color: #414141; */
        background-color: ${colourConfig.itemBoxHover};
        cursor: ${props => props.hasUrl ? "pointer" : "default"};
        color: ${fontConfig.global.hoverColour};
    }

    @media screen and (max-width: 768px) {
        /* grid-template-columns: [first] 25px [line2] 25px [line3] auto [end]; */
        padding: 2px 2px 2px 2px;
    }

`

const Number = styled.div`
    font-size: ${fontConfig.pubTitle.size};
    color: ${fontConfig.pubNumber.colour};
    border-radius: 100%;
    aspect-ratio: 1;
    align-items: center;
`

const Record = styled.div`
    display: inline-block;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;
    font-size: ${fontConfig.pubDetails.size};
    /* color: ${fontConfig.pubDetails.colour}; */

    @media screen and (max-width: 768px) {
        font-size: ${fontConfig.pubDetails.mobileSize};
    }
`

const Title = styled.b`
    font-size: ${fontConfig.pubTitle.size};
    /* color: ${fontConfig.pubTitle.colour}; */

    @media screen and (max-width: 768px) {
        font-size: ${fontConfig.pubTitle.mobileSize};
    }
`

const Authors = styled.div`
    margin-top: ${innerMargin};
    margin-bottom: ${innerMargin};
`

const PubDetails = styled.div`
`

const Publication = styled.span`
    color: ${fontConfig.pubPublication.colour};
`


const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: ${innerMargin};
    margin-top: ${props => props.hasTags ? innerMargin : 0};
    align-items: center;
    justify-content: flex-start;
`

const Divider = styled.div`
    border-left: 1px solid #626262;
    /* height: 5.5em; */
    margin-left: 0.75em;
    margin-right: 0.5em;
    align-self: stretch;
`

const Citation = styled.div`
    font-size: ${fontConfig.pubDetails.mobileSize};
    border-radius: 0.5em;
    background-color: #3d405b;
    width: max-content;
    padding: 4px 8px 4px 8px;
    align-self: center;

    margin-left: ${props => props.mobile === "true" ? "" : "auto"};
    visibility: ${props => props.mobile === "true" ? "hidden" : "visible"};
    height: ${props => props.mobile === "true" ? "0px" : ""};

    @media screen and (max-width: 1000px) {
        visibility: ${props => props.mobile === "true" ? "visible" : "hidden"};
        margin-right: ${props => props.mobile === "true" ? "auto" : ""};
        margin-top: 5px;
        height: ${props => props.mobile === "true" ? "auto" : "0px"};
    }
`

function PubItem(props) {
    const item = props.item;
    const type = props.type;
    const hasUrl = item.hasOwnProperty('url') && item.url != null;
    const hasTags = item.hasOwnProperty('tags') && item.tags != null;
    const prefix = type.charAt(0).toUpperCase(); 

    var tags;
    if (hasTags) {
        tags = item.tags.slice(0, 5);
        tags.sort((a, b) => {
            return (tagConfig.tagOrders[a] || 10) - (tagConfig.tagOrders[b] || 10);
        })
    }

    const pubDetails = (type === "journal") ? (
        <PubDetails>
            <Publication>{item.publication}, </Publication>
            {
                item.status === "Published" ? <span>Volume {item.volume}, Issue {item.issue}, Pages {item.pages}, {item.year}.</span> :
                item.status === "Early Access" ? <span>Early Access, {item.year}.</span> :
                item.status === "Accepted" ? <span>Accepted.</span> :
                item.status === "Submitted" ? <span>Submitted.</span> :
                <span></span>
            }
        </PubDetails>
    ) : (type === "conference") ? (
        <PubDetails>
            <Publication>{item.publication}, </Publication>
            {
                item.status === "Published" ? <span>{item.location}, {item.year}.</span> :
                item.status === "Accepted" ? <span>Accepted.</span> :
                <span></span>
            }
        </PubDetails>
    ) : (type === "thesis") ? (
        <PubDetails>
            <div>{item.type}, {item.department}, {item.institution}, {item.year}.</div>
        </PubDetails>
    ) : (
        <PubDetails></PubDetails>
    )

    const pubCitation = item.citation > 0 ? (
        <Citation>
            {item.citation} Citation{ item.citation > 1 ? ("s") : ("")}
        </Citation>
    ) : (<span></span>)

    const pubCitationMobile = item.citation > 0 ? (
        <Citation mobile="true">
            {item.citation} Citations
        </Citation>
    ) : (<span></span>)

    return (
        <Container onClick={() => hasUrl ? window.open(item.url) : {}} hasUrl={hasUrl} id={props.id}>
            <Number>[{prefix + props.id.toString()}]</Number>
            <Divider />
            <Record>
                <Title>{item.title}</Title>
                <Authors>{item.authors}</Authors>
                {pubDetails}
                {pubCitationMobile}
                <TagContainer hasTags={hasTags}>
                    {
                        hasTags ? tags.map((tag, index) => (
                            <Tag text={tag} key={index}></Tag>
                        )) :
                            (<span></span>)
                    }
                    {pubCitation}
                </TagContainer>
            </Record>
        </Container>
    );
}

export default PubItem;