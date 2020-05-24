import styled from '@emotion/styled';
import { THEME } from '../../../constants/theme';

export const Content = styled.div`
    @media (min-width: 1024px) {
        margin-left: 300px;
        width: calc(100% - 300px);
    }
    padding: 30px;
    background: rgb(2, 0, 36);
    background: ${THEME.color.background};
    height: 100%;
    min-height: 100vh;
    position: relative;
`;
