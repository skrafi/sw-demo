import * as React from 'react';

export const ValueList = ({ listValue }: Props) => {
    return (
        <>
            {listValue.map((val: string) => (
                <li key={val}>{val}</li>
            ))}
        </>
    );
};

interface Props {
    listValue: string[];
}
