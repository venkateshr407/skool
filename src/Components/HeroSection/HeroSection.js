import React from "react";
import HeroImageGirl from "../../Asset/hero-image.png";
import Line from "../../Asset/svg-line.png";

import {
    Container,
    HeroWrapper,
    Column1,
    Column2,
    Header4,
    Header1,
    HeaderWrapper,
    Header2,
    ButtonWrapper,
    BoxOne,
    Header5,
    BoxTwo,
    Button,
    Span,
    HeroImage,
    Column1Wrapper,
    Column2Wrapper,
    BoxLine,
    SpanText,
    DemoDetials,
    HeaderText3,
    LineBW,
} from "./HeroStyled";
import { AiOutlineClockCircle } from "react-icons/ai";

const HeroSection = () => {
    return (
        <>
            <Container>
                <HeroWrapper className="container">
                    <Column1>
                        <Column1Wrapper>
                            <Header4>Go Beyond School</Header4>
                            <Header1>
                                Edge<Span>ucate</Span>
                                <br />
                                Your Child for <br />
                                New World Success!
                            </Header1>
                            <HeaderWrapper>
                                <Header2>
                                    World's 1st integrated <br />
                                    IQ + EQ+ CQ Programme
                                </Header2>
                            </HeaderWrapper>
                            <ButtonWrapper>
                                <BoxOne>
                                    <BoxLine src={Line} alt="svg" />
                                    <Header5>
                                        All you need is <br />
                                        <SpanText>
                                            <AiOutlineClockCircle />
                                            ne hour a day
                                        </SpanText>
                                    </Header5>
                                </BoxOne>
                                <BoxTwo>
                                    <Button>Book a free Demo Now</Button>
                                </BoxTwo>
                            </ButtonWrapper>
                        </Column1Wrapper>
                    </Column1>
                    <Column2>
                        <Column2Wrapper>
                            <HeroImage src={HeroImageGirl} alt="img" />
                        </Column2Wrapper>
                    </Column2>
                    <DemoDetials>
                        <HeaderText3>Live Online Classes </HeaderText3>
                        <LineBetween />
                        <HeaderText3>1:6 peer-to-peer learning </HeaderText3>
                        <LineBetween />
                        <HeaderText3>Ages 4-13 years</HeaderText3>
                    </DemoDetials>
                </HeroWrapper>
            </Container>
        </>
    );
};

function LineBetween() {
    return (
        <>
            <span>
                <LineBW></LineBW>
            </span>
        </>
    );
}

export default HeroSection;
