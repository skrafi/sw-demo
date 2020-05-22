import React from 'react';
import { NavStyle } from './NavStyle';
import { NavLinkStyle } from './NavLinkStyle';
import { SWLogo } from './SWLogo';
import { ROUTES } from '../../constants/routes';

export const Navigation = () => {
    return (
        <NavStyle>
            <SWLogo />
            {ROUTES.map((r) => (
                <NavLinkStyle key={r.label} to={r.path}>
                    {r.label}
                </NavLinkStyle>
            ))}
        </NavStyle>
    );
};
