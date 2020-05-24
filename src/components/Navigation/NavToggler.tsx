import styled from '@emotion/styled';

export const NavToggler = styled.div`
    display: block;
    position: fixed;
    @media (min-width: 1024px) {
        display: none;
    }
    color: white;
    z-index: 5;
    font-size: 48px;
    top: 16px;
    left: 16px;
`;
