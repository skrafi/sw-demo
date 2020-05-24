import * as React from 'react';
import { ItemCardAvatar } from './ItemCardAvatar';
import { useHistory } from 'react-router-dom';
import { Person } from '../../../types/person';
import { Planet } from '../../../types/planet';
import { ItemCardWrapper, ItemCardStyle, CardInner, ItemName } from './asdasda';

export const ItemCard = (props: Props) => {
    const [item] = React.useState(props.item);
    const history = useHistory();
    const splittedUrl = props.item?.url?.split('/') || [];
    const id = splittedUrl[splittedUrl.length - 2];
    const goToDetails = () => {
        history.push(`/people/${id}`);
    };
    return (
        <ItemCardWrapper>
            <ItemCardStyle onClick={() => goToDetails()}>
                <CardInner>
                    <ItemCardAvatar cardType={props.type} />
                    <ItemName>{item.name}</ItemName>
                </CardInner>
            </ItemCardStyle>
        </ItemCardWrapper>
    );
};

interface Props {
    item: Person | Planet;
    type: string;
}
