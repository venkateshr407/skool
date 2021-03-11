import styled from 'styled-components';
// import {Link as LinkR} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index: 999;
    width:100%;
    height: 100%;
    background:#0d0d0d;
    display:grid;
    align-items:center;
    left:0;
    top:0;
    transition: 0.3s ease-in-out;
    opacity: ${ ({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${ ({isOpen}) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
    color:#fff;
`
export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor: pointer;
    outline:none;
`
export const SidebarWraper = styled.div`
    color:#fff;
`
export const SidebarMenu = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6, 80px);
    text-align:center;

    @media screen and (max-width: 480px){
        grid-template-rows:repeat(6, 60px);
    }
`
export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items:center;
    justify-content:center;
    font-size:1.5em;
    text-decoration:none;
    list-style:none;
    transition: .2s ease-in-out;
    cursor: pointer;
    color:#fff;

    &:hover{
        color:#01bf71;
        transition:0.2s ease-in-out;
    }
`