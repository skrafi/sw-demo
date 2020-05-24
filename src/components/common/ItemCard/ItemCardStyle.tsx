import styled from '@emotion/styled';
import { THEME } from '../../../constants/theme';

export const ItemCardWrapper = styled.div`
    width: 100%;
    @media (min-width: 460px) {
        width: 50%;
    }
    @media (min-width: 1024px) {
        width: 33%;
    }
    @media (min-width: 1300px) {
        width: 25%;
    }
    padding: 0 10px;
    margin-bottom: 32px;

    display: flex;
    flex-direction: column;
`;

export const ItemCardStyle = styled.div`
    width: 100%;
    max-width: 420px;
    height: 16em;
    width: 100%;
    @media (min-width: 460px) {
        width: 50%;
    }
    @media (min-width: 1024px) {
        width: 33%;
    }
    cursor: pointer;
    &:hover {
        & > div {
            border: 2px solid ${THEME.color.red};
        }
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #e7e7e7;
    border-radius: 8px;
    background-color: #2e2e2e;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.8);
    padding: 8px;
`;

export const CardInner = styled.div`
    border: 2px solid #67b8d2;
    border-radius: 8px;
    height: 100%;
    width: 100%;
    padding: 10px;
`;

export const ItemName = styled.div`
    width: 100%;
    text-align: center;
`;
