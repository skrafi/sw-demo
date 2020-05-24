import styled from '@emotion/styled';
import { THEME } from '../../constants/theme';

export const NavStyle = styled.div`
    position: fixed;
    left: 0;
    @media (min-width: 1920px) {
        left: calc((100vw - 1920px) / 2);
    }

    padding: 30px 0;
    width: 20%;
    max-width: 400px;
    height: 100%;
    min-height: 500px;

    background-color: ${THEME.color.deepBlack};
    box-shadow: ${THEME.shadow.gold};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
