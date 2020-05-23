import styled from '@emotion/styled';
import avatar from '../../../assets/images/stortrooper.jpg';

export const PersonCardAvatar = styled.div`
    width: 10em;
    height: 8em;

    align-self: center;
    background-image: url(${() => avatar});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    margin-bottom: 8px;
`;
