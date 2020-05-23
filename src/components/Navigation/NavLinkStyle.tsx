import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { THEME } from '../../constants/theme';

export const NavLinkStyle = styled(NavLink)`
    padding: 8px 16px;
    margin-top: 8px;
    width: 100%;

    color: ${THEME.color.primaryGold};

    text-align: left;
    font-family: ${THEME.font.familiy.secondary}
    font-size: 22px;
    line-height: 24px;
    font-weight: 600;
    text-decoration: none;

    $:first-child {
        margin-top: 8px;
    }
    &:hover,
    &.active {
        background-color: ${THEME.color.primaryGold};
        color: black;
    }
`;
