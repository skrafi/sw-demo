import styled from '@emotion/styled';
import { THEME } from '../../../constants/theme';

export const Page = styled.span<{ active: boolean }>`
    font-size: 20px;
    padding: 8px;
    margin: 0 8px;
    color: ${({ active }) => (active ? THEME.color.primaryGold : THEME.color.lightGray)};
    border-bottom: 1px solid ${({ active }) => (active ? THEME.color.primaryGold : 'none')};
    cursor: pointer;
    &:hover {
        color: ${THEME.color.primaryGold};
        border-bottom: 1px solid ${THEME.color.primaryGold};
    }
`;

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 32px;
`;
