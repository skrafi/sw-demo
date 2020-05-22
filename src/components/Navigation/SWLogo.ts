import styled from '@emotion/styled';
import logo from '../../assets/images/logo.png';

export const SWLogo = styled.div`
    background-image: url(${() => logo});
    width: 100%;
    height: 70px;
    background-size: contain;
    background-repeat: no-repeat;
    align-self: center;
    background-position: center;
    display: block;
    margin-bottom: 30px;
`;
