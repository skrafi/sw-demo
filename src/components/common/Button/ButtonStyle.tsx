import styled from '@emotion/styled';

const backBtnStyles = `
  position: absolute;
  left: 24px;
  top:24px;
`;

interface BtnProps {
    backBtn?: boolean;
}

export const ButtonStyle = styled.button<BtnProps>`
    ${(props) => props.backBtn && backBtnStyles}
`;
