import styled from '@emotion/styled';
import avatar from '../../../assets/images/stortrooper.jpg';

export const PersonCardAvatar = styled.div`
    width: 70px;
    height: 70px;

    align-self: center;
    background-image: url(${() => avatar});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    margin-bottom: 8px;
`;
