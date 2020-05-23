import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '../common/Button/Button';

export const PersonDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const handleClick = () => {
        history.push('/people');
    };
    return (
        <div>
            <Button text="&larr; Back" onClick={handleClick} />
            <span>Now person with id: {id}</span>
        </div>
    );
};
