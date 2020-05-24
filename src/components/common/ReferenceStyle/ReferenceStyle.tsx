import styled from '@emotion/styled';
import { THEME } from '../../../constants/theme';

export const ReferenceStyle = styled.span`
    border-bottom: 1px solid white;
    cursor: pointer;
    &:hover {
        color: ${THEME.color.primaryGold};
        border-bottom: 1px solid ${THEME.color.primaryGold};
    }
`;
