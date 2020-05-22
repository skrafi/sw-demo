import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div>
            <NavLink to="/people">People</NavLink>
            <NavLink to="/planets">Planets</NavLink>
            <NavLink to="/communication">Communication</NavLink>
        </div>
    );
};
