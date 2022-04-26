import React from 'react'
import styled from 'styled-components';
import tagConfig from '../config/tagConfig';
import './PubItem.css'
import Tag from './Tag';

const titleFontSize = "15px";
const innerMargin = "5px";

const Container = styled.div`
    display: grid;
    max-width: 100%;
    grid-template-columns: [first] 25px [line2] 25px [line3] auto [end];
    margin-bottom: 0px;
    border-radius: 0.5em;
    padding: 5px 5px 5px 5px;
    transition: background-color 0.25s;

    &:hover {
        background-color: #414141;
        cursor: ${props => props.hasUrl ? "pointer" : "default"};
    }

    @media screen and (max-width: 768px) {
        /* grid-template-columns: [first] 25px [line2] 25px [line3] auto [end]; */
        padding: 2px 2px 2px 2px;
    }

    margin-bottom: ${props => props.id === 1 ? "0em" : "0.5em"};
`

const Number = styled.div`
    display: inline-grid;
    font-size: ${titleFontSize};
    color: #898989;
`

const Record = styled.div`
    display: inline-block;
    width: auto;
    overflow: hidden;
    overflow-wrap: break-word;
    /* margin-bottom: 1em; */
    font-size: 14px;
`

const Title = styled.b`
    font-size: ${titleFontSize};
`

const Authors = styled.div`
    margin-top: ${innerMargin};
    margin-bottom: ${innerMargin};
`

const PubDetails = styled.div`
    
`

const Publication = styled.span`
    color: cyan;
`

const TagContainer = styled.div`
    display: flex;
    margin-top: ${props => props.hasTags ? innerMargin : 0};

    @media screen and (max-width: 768px) {
        visibility: hidden;
        height: 0;
    }
`

const Divider = styled.div`
    border-left: 1px solid #626262;
    height: 100%;
    margin-left: 0.75em;
    margin-right: 0.5em;
`

function PubItem(props) {
    const item = props.item;
    const type = props.type;
    const hasUrl = item.hasOwnProperty('url');
    const hasTags = item.hasOwnProperty('tags');
    const prefix = type.charAt(0).toUpperCase();

    console.log(item.key)
    var tags;
    if (hasTags) {
        tags = item.tags.slice(0, 5);
        tags.sort((a, b) => {
            return (tagConfig.tagOrders[a] || 100) - (tagConfig.tagOrders[b] || 100);
        })
    }

    const pubDetails = (type === "journal") ? (
        <PubDetails>
            <Publication>{item.publication}, </Publication>
            {
                item.status === "Published" ? (<span>Volume {item.volume}, Issue {item.issue}, Pages {item.pages}, {item.year}.</span>) :
                    item.status === "Accepted" ? (<span>Accepted.</span>) :
                        item.status === "Submitted" ? (<span>Submitted.</span>) :
                            <span></span>
            }
        </PubDetails>
    ) : (type === "conference") ? (
        <PubDetails>
            <Publication>{item.publication}, </Publication>
            {
                item.status === "Published" ? (<span>{item.location}, {item.year}.</span>) :
                    item.status === "Accepted" ? (<span>Accepted.</span>) :
                        (<span></span>)
            }
        </PubDetails>
    ) : (type === "thesis") ? (
        <PubDetails>
            <div>{item.type}, {item.department}, {item.institution}, {item.year}.</div>
        </PubDetails>
    ) : (
        <PubDetails></PubDetails>
    )

    return (
        <Container onClick={() => hasUrl ? window.open(item.url) : {}} hasUrl={hasUrl} id={props.id}>
            <Number>[{prefix + props.id.toString()}]</Number>
            <Divider />
            <Record>
                <Title>{item.title}</Title>
                <Authors>{item.authors}</Authors>
                {pubDetails}
                <TagContainer hasTags={hasTags}>
                    {
                        hasTags ? tags.map((tag, index) => (
                            <Tag text={tag} key={index}></Tag>
                        )) :
                            (<span></span>)
                    }
                </TagContainer>
            </Record>
        </Container>
    );
}

export default PubItem;