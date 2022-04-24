import React from "react";
import styled from 'styled-components';
import media from '../../media';

const LeadingText = styled.h3`
    font-size: 18px;
    font-weight: 700;
    margin: 2rem;
    margin-bottom: 0;

    ${media.tablet`
        font-size: 28px;
        margin: 4rem;
        margin-bottom: 0;
    `};
`;

export default LeadingText;