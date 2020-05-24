import styled from '@emotion/styled';

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const DetailsCardStyle = styled.div`
    width: 100%;
    margin-bottom: 64px;
    @media (min-width: 768px) {
        min-height: 400px;
        margin-bottom: 0;
    }

    color: #e7e7e7;
    border-radius: 8px;
    background-color: #2e2e2e;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.8);
    padding: 16px;
`;

export const DetsailsCardInner = styled.div`
    border: 2px solid #67b8d2;
    border-radius: 8px;
    height: 100%;
    width: 100%;
    padding: 24px;
`;
