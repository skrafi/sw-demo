import styled from '@emotion/styled';
import { THEME } from '../../../constants/theme';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${THEME.color.primaryGold};
    font-size: 40px;
    margin-bottom: 34px;
    font-weight: 600;
    font-family: ${THEME.font.familiy.primary};
`;
