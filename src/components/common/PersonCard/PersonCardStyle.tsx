import styled from '@emotion/styled';
import { THEME } from '../../../constants/theme';

export const PersonCardWrapper = styled.div`
    width: 25%;

    padding: 0 10px;
    margin-bottom: 32px;

    display: flex;
    flex-direction: column;
`;

export const PersonCardStyle = styled.div`
    margin: 2% 5%;
    padding: 16px;
    width: 10em;
    height: 12em;
    cursor: pointer;
    &:hover {
        box-shadow: ${THEME.shadow.gold};
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #e7e7e7;
    border-radius: 8px;
`;
