import React from 'react';
import styled from 'styled-components';
import media from './media';
import Container from './components/container/';
import LeadingContainer from './components/leading-container/';

export default function App() {
    return (
        <Container>
            <LeadingContainer>This is a Leading text</LeadingContainer>
        </Container>
    );
}
