import React from "react";
import styled from 'styled-components';
import media from '../../media';
import { primaryColor, textColorDark } from '../UI/colors'

const LeadingContainer = styled.div`
    height: 30vh;
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

export default LeadingContainer;
