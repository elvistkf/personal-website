import React from 'react';
import styled from 'styled-components';
import "../common.css"

const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
`

const Title = styled.h1`
	/* border-bottom: 1px solid #626262; */
	width: max-content;
	padding: 0 10px 5px 10px;
	animation-name: extend;
	animation-duration: 0.5s;
`

function PageTitle(props) {
  return (
    <TitleContainer><Title>{props.title}</Title></TitleContainer>
  )
}

export default PageTitle