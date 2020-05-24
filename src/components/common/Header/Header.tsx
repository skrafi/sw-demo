import styled from '@emotion/styled';
import { THEME } from '../../../constants/theme';

export const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: ${THEME.color.primaryGold};
    font-size: 40px;
    margin-bottom: 34px;
    margin-left: 60px;
    @media (min-width: 1024px) {
        margin-left: 0;
    }
    font-weight: 600;
    font-family: ${THEME.font.familiy.primary};
`;
