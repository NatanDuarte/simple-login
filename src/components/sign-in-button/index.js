import { secundaryColor, textColorDark } from "../UI/colors";
import styled from 'styled-components';
import media from '../../media'

const SignInButton = styled.input`
    padding: .5rem .8rem;
    background-color: ${secundaryColor};
    width: 100%;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    color: ${textColorDark};
    ${media.tablet`
        width: 50%;
        align-self: end;
    `};
`;

export default SignInButton;