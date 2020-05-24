import * as React from 'react';
import { PersonCardAvatar } from './PersonCardAvatar';
import { PersonCardWrapper, PersonCardStyle, CardInner, PersonName } from './PersonCardStyle';
import { useHistory } from 'react-router-dom';
import { Person } from '../../../types/person';
import { Planet } from '../../../types/planet';

export const PersonCard = (props: Props) => {
    const [item] = React.useState(props.item);
    const history = useHistory();
    const splittedUrl = props.item?.url?.split('/') || [];
    const id = splittedUrl[splittedUrl.length - 2];
    const goToDetails = () => {
        history.push(`/people/${id}`);
    };
    return (
        <PersonCardWrapper>
            <PersonCardStyle onClick={() => goToDetails()}>
                <CardInner>
                    <PersonCardAvatar cardType={props.type} />
                    <PersonName>{item.name}</PersonName>
                </CardInner>
            </PersonCardStyle>
        </PersonCardWrapper>
    );
};

interface Props {
    item: Person | Planet;
    type: string;
}
