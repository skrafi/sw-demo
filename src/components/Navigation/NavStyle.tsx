import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { THEME } from '../../constants/theme';

const slideIn = keyframes`
  0% { left: -100%; }
  100% { left: 0; }
`;

const slideOut = keyframes`
  0% { left: 0 }
  100% { left: -100%; }
`;

export const NavStyle = styled.div<{ visible: boolean }>`
    position: fixed;
    z-index: 3;
    left: ${({ visible }) => (visible ? '0' : '-400px')};
    &.show {
        animation: ${slideIn} 1s ease;
    }
    &.hide {
        animation: ${slideOut} 1s ease;
    }

    padding: 30px 0;
    width: 100%;
    max-width: 300px;
    height: 100%;
    min-height: 500px;

    background-color: ${THEME.color.deepBlack};
    box-shadow: ${THEME.shadow.gold};

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 1920px) {
        left: calc((100vw - 1920px) / 2);
    }

    @media (min-width: 1300px) {
        width: 20%;
    }

    @media (min-width: 1024px) {
        left: 0;
    }

    @media (min-width: 768px) {
        width: 300px;
    }
`;
