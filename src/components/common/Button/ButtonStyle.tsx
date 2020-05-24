import styled from '@emotion/styled';
import { THEME } from '../../../constants/theme';

const backBtnStyles = `
  position: absolute;
  right: 24px;
  left: -1;
  top:32px;
  @media(min-width:1024px){
    left: 24px;
    right: -1;
  }
`;

interface BtnProps {
    backBtn?: boolean;
}

export const ButtonStyle = styled.button<BtnProps>`
    box-shadow: none;
    border: none;
    background-color: ${THEME.color.primaryGold};
    border: 2px solid transparent;
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
