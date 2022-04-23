import React from 'react';
import Container from './components/container/';
import LeadingContainer from './components/leading-container/';
import { GlobalStyle } from './components/GlobalStyle';

export default function App() {
    return (
        <>
        <GlobalStyle/>
        <Container>
            <LeadingContainer>This is a Leading text</LeadingContainer>
        </Container>
        </>
    );
}
