import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
`;

export const HeroWrapper = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    align-items: center;
    position: relative;
    @media screen and (max-width: 800px) {
        grid-template-columns: auto;
    }
`;
export const Column1 = styled.div`
    height: auto;
`;
export const Column1Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    @media screen and (max-width: 1025px) {
        height: auto;
    }
`;
export const Header4 = styled.h4`
    font-size: 21px;
    text-transform: uppercase;
`;
export const Header1 = styled.h1`
    font-size: 37pt;
    color: #ef5730;
    font-weight: bold;
`;
export const Span = styled.span`
    font-size: 1em;
    color: #161442;
`;
export const HeaderWrapper = styled.div`
    margin: 2em 0;
`;
export const Header2 = styled.h2`
    font-size: 25pt;
    font-weight: bold;
    color: #161442;
`;
export const ButtonWrapper = styled.div`
    margin: 2em 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
export const BoxOne = styled.div`
    position: relative;
    @media screen and (max-width: 900px) {
        width: 70%;
    }
`;

export const BoxLine = styled.img`
    width: 80%;
    position: relative;
    /* background:#515bde; */
`;
export const Header5 = styled.h5`
    background: #fff;
    position: absolute;
    top: -25%;
    left: 11%;
    color: #161442;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    @media screen and (max-width: 900px) {
        left: center;
    }
`;
export const SpanText = styled.span`
    font-size: 1.4em;
    color: #ef5730;
    font-weight: bold;
`;
export const BoxTwo = styled.div`
    width: 40%;
`;
export const Button = styled(Link)`
    background: rgb(22, 20, 66);
    background: linear-gradient(
        90deg,
        rgba(22, 20, 66, 1) 0%,
        rgba(22, 20, 66, 1) 21%,
        rgba(239, 87, 48, 1) 88%
    );
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: #fff;
    padding: 0.5em;
    text-decoration: none;
    border-radius: 50px;
    @media screen and (max-width: 900px) {
        text-align: center;
        padding: 1em;
        height: 50px;
    }
`;

export const Column2 = styled.div`
    height: auto;
`;
export const Column2Wrapper = styled.div`
    align-items: center;
    height: 90vh;
    @media screen and (max-width: 1025px) {
        height: auto;
    }
`;

export const HeroImage = styled.img`
    width: 100%;
    height: 100%;
    padding: 1.5em 0;
`;

export const DemoDetials = styled.div`
    width: 100%;
    position: absolute;
    top: 90%;
    display: flex;
    margin: 1em 0 0.5em 0;

    @media screen and (max-width: 900px) {
        position: unset;
        bottom: 0;
        margin: 1em 0 0.5em 0;
    }
`;
export const HeaderText3 = styled.h3`
    font-size: 1em;
    font-weight: 500;
    margin: 0 1em;
    color: #212529;
`;
export const LineBW = styled.div`
    width: 2px;
    height: 20px;
    background: #212529;
`;
