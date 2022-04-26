import React from "react";
import styled from 'styled-components';
import { lightBackgroundColor } from '../UI/colors'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    background-color: ${lightBackgroundColor};

    flex-direction: row;
`;

export default Container;