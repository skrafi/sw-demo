import * as React from 'react';
import { Label, LabelWrapper } from '../Label/Label';
import { ReferenceStyle } from '../ReferenceStyle/ReferenceStyle';
import { getIdFromUrl } from '../../../helpers/getIdFromUrl';
import { useHistory } from 'react-router-dom';
import { Reference } from '../../../types/common';

export const RowSingleValue = ({ title, value, urlType }: Props) => {
    const history = useHistory();
    const handleClick = () => history.push(`/${urlType}/${getIdFromUrl(value.url)}`);
    return (
        <LabelWrapper>
            <Label>{title}: </Label>
            <ReferenceStyle key={value.name} onClick={handleClick}>
                {value.name}
            </ReferenceStyle>
        </LabelWrapper>
    );
};

interface Props {
    title: string;
    value: Reference;
    urlType: string;
}
