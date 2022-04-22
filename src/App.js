import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: row;
`;

const LeftSide = styled.div`
    height: 100vh;
    width: 40%;
    background-color: #8353CD;
`;

const Rightside = styled.div`
    height: 100vh;
    width: 60%;
    display: flex;
    flex-direction: column;
    background-color: #f2f2f2;
    align-items: center;
`;

const DefaultContainer = styled.div`
    height: 30vh;
    width: 30vw;
    margin: 4em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Title = styled.h3`
    padding-bottom: 2em;
    font-size: 20;
    font-weight: 700;
    color: #8155C6;
`;

export default function App() {
    return (
        <Container>
            <LeftSide></LeftSide>
            <Rightside>
                <form action='#'>
                    <DefaultContainer>
                        <Title>Login</Title>
                        <label>sadf</label>
                        <input type='text'/>
                        <label>sadf</label>
                        <input type='password'/>
                    </DefaultContainer>
                </form>
            </Rightside>
        </Container>
    );
}
