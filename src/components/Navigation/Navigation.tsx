import React from 'react';
import { NavStyle } from './NavStyle';
import { NavLinkStyle } from './NavLinkStyle';
import { SWLogo } from './SWLogo';
import { ROUTES } from '../../constants/routes';
import { NavToggler } from './NavToggler';

export const Navigation = () => {
    const [visible, setVisible] = React.useState(false);
    const toggleMenu = () => {
        setVisible((prevValue: boolean) => {
            return !prevValue;
        });
    };
    return (
        <>
            <NavToggler onClick={toggleMenu}>&#9776;</NavToggler>
            <NavStyle className={visible ? 'show' : 'hide'} visible={visible}>
                <SWLogo />
                {ROUTES.map((r) => (
                    <NavLinkStyle key={r.label} to={r.path} onClick={toggleMenu}>
                        {r.label}
                    </NavLinkStyle>
                ))}
            </NavStyle>
        </>
    );
};
