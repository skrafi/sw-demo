import styled from '@emotion/styled';
import { THEME } from '../../../constants/theme';

const backBtnStyles = `
  position: absolute;
  left: 24px;
  top:24px;
`;

interface BtnProps {
    backBtn?: boolean;
}

export const ButtonStyle = styled.button<BtnProps>`
    box-shadow: none;
    border: none;
    background-color: ${THEME.color.primaryGold};
    border: 2px solid ${THEME.color.deepBlack};
    padding: 8px 16px;
    font-weight: 600;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: black;
        border: 2px solid ${THEME.color.primaryGold};
        color: ${THEME.color.primaryGold};
    }
    ${(props) => props.backBtn && backBtnStyles}
`;
