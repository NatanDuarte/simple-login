import styled from 'styled-components';
import { primaryColor, textColorLight } from "../UI/colors";

const TextField = styled.input`
    background-color: transparent;
    padding: 0.4rem 0.2rem;
    border-radius: 10px;
    border-color: ${primaryColor};
    width: 100%;
    font-size: 14px;
    color: ${textColorLight};
    margin-bottom: 1rem;
`;

export default TextField;