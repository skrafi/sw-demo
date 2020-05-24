import * as React from 'react';
import { ReferenceStyleList } from './List';
import { Reference } from '../../../types/common';

export const ReferenceList = ({ listReference, handleClick }: ReferenceListProps) => {
    return (
        <>
            {listReference.map((val: Reference) => (
                <ReferenceStyleList key={val.name} onClick={() => handleClick(val)}>
                    {val.name}
                </ReferenceStyleList>
            ))}
        </>
    );
};

interface ReferenceListProps {
    listReference: Reference[];
    handleClick: (val: Reference) => void;
}
