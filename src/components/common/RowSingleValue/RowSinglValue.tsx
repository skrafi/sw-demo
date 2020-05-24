import * as React from 'react';
import { Label, LabelWrapper } from '../Label/Label';
import { ReferenceStyle } from '../ReferenceStyle/ReferenceStyle';
import { getIdFromUrl } from '../../../helpers/getIdFromUrl';
import { useHistory } from 'react-router-dom';
import { Reference } from '../../../types/common';

export const RowSingleValue = ({ title, reference, value, urlType }: Props) => {
    const history = useHistory();
    const handleClick = reference ? () => history.push(`/${urlType}/${getIdFromUrl(reference.url)}`) : undefined;
    return (
        <LabelWrapper>
            <Label>{title}: </Label>
            {reference ? (
                <ReferenceStyle key={reference.name} onClick={handleClick}>
                    {reference.name}
                </ReferenceStyle>
            ) : (
                <span>{value}</span>
            )}
        </LabelWrapper>
    );
};

interface Props {
    title: string;
    value?: string | number;
    reference?: Reference;
    urlType?: string;
}
