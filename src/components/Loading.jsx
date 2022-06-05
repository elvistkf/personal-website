import styled from 'styled-components';
import "../common.css";
import React from 'react';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`

// const 

function Loading() {
  return (
    <Container>
        <div className="dot-typing"></div>
    </Container>
    // <div>Loading</div>
  )
}

export default Loading;