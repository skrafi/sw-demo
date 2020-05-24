import * as React from 'react';
import { Label, LabelWrapper } from '../Label/Label';
import { useHistory } from 'react-router-dom';
import { getIdFromUrl } from '../../../helpers/getIdFromUrl';
import { List, ReferenceStyleList } from './List';
import { Reference } from '../../../types/common';

export const RowMultipleValue = ({ title, listValue, urlType }: Props) => {
    const history = useHistory();
    const handleClick = (s: Reference) => history.push(`/${urlType}/${getIdFromUrl(s.url)}`);
    return (
        <>
            <LabelWrapper>
                <Label>{title}: </Label>
                {listValue.length === 0 && 'None'}
            </LabelWrapper>
            {listValue.length !== 0 && (
                <List>
                    {listValue.map((v: Reference) => (
                        <ReferenceStyleList key={v.name} onClick={() => handleClick(v)}>
                            {v.name}
                        </ReferenceStyleList>
                    ))}
                </List>
            )}
        </>
    );
};

interface Props {
    title: string;
    listValue: Reference[];
    urlType: string;
}
