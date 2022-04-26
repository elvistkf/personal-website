import { AiOutlineFileText, AiOutlineHome, AiOutlineProject } from 'react-icons/ai'
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import './Navbar.css'
import dividerConfig from '../config/dividerConfig';

const Container = styled.div`
    background-color: #212121;
    padding: 0.75em 1em 0.75em 1em;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 2.2em;
    position: sticky;
    top: 0;
    border-bottom: 1px solid #464646;
    z-index: 50;
`;

const SubContainer = styled.div`
    display: flex;
    align-items: center;
`

const Items = styled.div`
    display: flex;
    align-items: center;
    /* font-size: 15px; */
`

const Logo = styled.div`
    /* font-size: 50px; */
    margin-left: 0.5em;
    margin-right: 0.5em;
`

const Divider = styled.div`
    border-left: 1px solid ${dividerConfig.colour};
    height: 2em;
    margin-left: 0.75em;
    margin-right: 0.5em;
`

const NavLink = styled(Link)`
    margin-left: 0.25em;
    margin-right: 0.25em;
    padding: 0.5em 0.75em 0.5em 0.75em;
    border-radius: 0.5em;
    color: white;
    display: flex;
    align-items: center;
    
    @media screen and (min-width: 768px){
        transition: background-color 0.5s;   
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 0.25em;
    }

    &:hover{
        background-color: #303030;
    }
`

const NavToggleBtn = styled.div`
    cursor: pointer; 
    display: none;
    border-radius: 6px;
    padding: 0.45em 0.5em 0.45em 0.5em;
    transition: background-color, 0.5s;

    &:hover, &:active{
        background-color: #303030;
    }
`

function activate(e) {
    document.getElementById("nav-items").classList.remove("responsive");
    document.getElementById("nav-subcon").classList.remove("responsive");
    document.getElementById("nav-logo").classList.remove("responsive");
}

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const currentLocation = useLocation().pathname

    // Check current path and activate the corresponding navigation button
    useEffect(() => {
        for (let item of document.getElementsByClassName("navlink")) {
            item.classList.remove("active");
        }
        switch (currentLocation) {
            case "/projects":
                document.getElementById("nav-projects").classList.add("active");
                break;
            case "/publications":
                document.getElementById("nav-pub").classList.add("active");
                break;
            default:
                document.getElementById("nav-home").classList.add("active");
                break;
        }
        window.scrollTo(0, 0);
    });
    
    function toggleNavBar() {
        document.getElementById("nav-items").classList.toggle("responsive");
        document.getElementById("nav-subcon").classList.toggle("responsive");
        document.getElementById("nav-logo").classList.toggle("responsive");
        setToggle(!toggle);

        for (let item of document.getElementsByClassName("navlink")) {
            item.classList.remove("active");
        }
    }

    return (
        <Container id="navbar">
            <SubContainer id="nav-subcon">
                <Logo id="nav-logo">Elvis Tsang</Logo>
                <Divider id="nav-div" />
                <Items id="nav-items">
                    <NavLink to="/" onClick={activate} className="navlink" id="nav-home">
                        <AiOutlineHome className='nav-icon' />
                        Home
                    </NavLink>
                    <NavLink to="/projects" onClick={activate} className="navlink" id="nav-projects">
                        <AiOutlineProject className='nav-icon' />
                        Projects
                    </NavLink>
                    <NavLink to="/publications" onClick={activate} className="navlink" id="nav-pub">
                        <AiOutlineFileText className='nav-icon' />
                        Publications
                    </NavLink>
                </Items>
            </SubContainer>
            <NavToggleBtn onClick={toggleNavBar} id="nav-toggle">
                <div id="bar1" />
                <div id="bar2" />
                <div id="bar3" />
            </NavToggleBtn>
        </Container>
    );
}

export default Navbar;
