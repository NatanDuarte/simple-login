import React from "react";
import styled from 'styled-components';
import media from '../media';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    background-color: #F4F4F4;

    flex-direction: column;
    ${media.desktop`
        height: 100vh;
        width: 100%;
    `};
    ${media.tablet`
        height: 100vh;
        width: 100%;
    `};
    ${media.widescreen`
        height: 100vh;
        width: 100%;
    `};
    ${media.uhd`
        height: 100vh;
        width: 100%;
    `};
`;

export default Container;