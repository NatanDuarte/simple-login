import styled from 'styled-components';
import media from '../../media';

const MutedText = styled.p`
    font-size: 12px;
    font-weight: lighter;
    margin: 2rem;
    margin-top: 1rem;

    ${media.tablet`
        font-size: 16px;
        margin: 4rem;
        margin-top: 1rem;
    `};
`;

export default MutedText;