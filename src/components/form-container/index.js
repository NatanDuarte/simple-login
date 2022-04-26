import React from 'react';
import styled from 'styled-components';
import media from '../../media';

import CustomLabel from '../custom-label'
import Title from '../title';
import SignInButton from '../sign-in-button';
import TextField from '../text-field';

const Form = styled.form`
    width: 90%;
    padding: 0.4rem;
    padding-top: 1.4rem;
    display: flex;
    flex-direction: column;

    ${media.tablet`
        width: 60%;
    `};
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${media.tablet`
        flex-direction: column;
        height: 100vh;
        width: 60%;
    `};
`;

const FormContainer = () => {
    return (
        <Container>
            <Form action='#'>
                <Title>Login</Title>

                <CustomLabel>username</CustomLabel>
                <TextField type='text'/>

                <CustomLabel>password</CustomLabel>
                <TextField type='password'/>

                <SignInButton type='submit' value='Sign In'/>
            </Form>
        </Container>
    );
}

export default FormContainer;