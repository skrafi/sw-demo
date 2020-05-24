import styled from '@emotion/styled';
import { ReferenceStyle } from '../ReferenceStyle/ReferenceStyle';

export const ReferenceStyleList = ReferenceStyle.withComponent('li');
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    margin-bottom: 16px;

    & li {
        margin: 8px 0;
        font-weight: 600;
    }
    & li:first-of-type {
        margin-top: -8px;
    }
`;
