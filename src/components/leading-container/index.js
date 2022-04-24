import React from "react";
import styled from 'styled-components';
import media from '../../media';
import { primaryColor, textColorDark } from '../UI/colors'

import LeadingText from "../leading-text";
import MutedText from "../muted-text";

const Container = styled.div`
    height: 45vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${primaryColor};
    color: ${textColorDark};

    ${media.desktop`
        flex-direction: column;
        height: 100vh;
        width: 40%;
    `};
    ${media.tablet`
        flex-direction: column;
        height: 100vh;
        width: 40%;
    `};
`;

const LeadingContainer = () => {
    return (
        <Container>
            <LeadingText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</LeadingText>
            <MutedText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh tristique lobortis consectetur sit fermentum.</MutedText>
        </Container>
    );
}

export default LeadingContainer;
