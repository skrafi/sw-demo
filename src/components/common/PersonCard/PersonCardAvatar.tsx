import styled from '@emotion/styled';
import avatar from '../../../assets/images/stortrooper.jpg';

export const PersonCardAvatar = styled.div`
    width: 100%;
    height: 80%;

    align-self: center;
    background-image: url(${() => avatar});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    margin-bottom: 8px;
`;
