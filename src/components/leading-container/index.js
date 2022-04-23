import React from "react";
import styled from 'styled-components';
import media from '../../media';

const LeadingContainer = styled.div`
    height: 30vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #8353CD;

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

export default LeadingContainer;
