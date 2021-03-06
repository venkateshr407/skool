import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #fff;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em;
    z-index: 999;
    position: sticky;
    @media screen and (max-width: 920px) {
        padding: 0;
    }
`;

export const LogoImage = styled.img`
    width: 50%;
    padding: 1em;
    @media screen and (max-width: 920px) {
        padding: 1em 1em 1em 0;
    }
`;
export const NavLink = styled(Link)`
    color: #ef5730;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #ef5730;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: rgb(22, 20, 66);
    background: linear-gradient(
        90deg,
        rgba(22, 20, 66, 1) 0%,
        rgba(22, 20, 66, 1) 21%,
        rgba(239, 87, 48, 1) 88%
    );
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;
