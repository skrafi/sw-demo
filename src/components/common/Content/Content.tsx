import styled from '@emotion/styled';
import { THEME } from '../../../constants/theme';

export const Content = styled.div`
    width: 80%;
    margin-left: 20%;
    padding: 30px;
    background: rgb(2, 0, 36);
    background: ${THEME.color.background};
    height: 100%;
    min-height: 100vh;
    position: relative;
`;
