import * as React from 'react';
import { Label, LabelWrapper } from '../Label/Label';
import { useHistory } from 'react-router-dom';
import { getIdFromUrl } from '../../../helpers/getIdFromUrl';
import { List } from './List';
import { Reference } from '../../../types/common';
import { ReferenceList } from './ReferenceList';
import { ValueList } from './ValueList';

export const RowMultipleValue = ({ title, listValue = [], listReference = [], urlType }: Props) => {
    const history = useHistory();
    const handleClick = (s: Reference) => history.push(`/${urlType}/${getIdFromUrl(s.url)}`);
    const isReference = listReference.length > 0;
    const emptyList = listValue.length + listReference.length === 0;
    return (
        <>
            <LabelWrapper>
                <Label>{title}: </Label>
                {emptyList && 'None'}
            </LabelWrapper>
            {!emptyList && (
                <List>
                    {isReference ? (
                        <ReferenceList listReference={listReference} handleClick={handleClick} />
                    ) : (
                        <ValueList listValue={listValue} />
                    )}
                </List>
            )}
        </>
    );
};

interface Props {
    title: string;
    listReference?: Reference[];
    listValue?: string[];
    urlType?: string;
}
