import * as React from 'react';
import { ItemCardAvatar } from './ItemCardAvatar';
import { useHistory } from 'react-router-dom';
import { Person } from '../../../types/person';
import { Planet } from '../../../types/planet';
import { ItemCardWrapper, ItemCardStyle, CardInner, ItemName } from './ItemCardStyle';
import { Vehicle } from '../../../types/vehicle';

export const ItemCard = (props: Props) => {
    const [item] = React.useState(props.item);
    const history = useHistory();
    const splittedUrl = props.item?.url?.split('/') || [];
    const id = splittedUrl[splittedUrl.length - 2];
    const goToDetails = () => {
        history.push(`/${props.type}/${id}`);
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
    /**
     * A description of the prop that you seem fit :)
     */
    item: Person | Planet | Vehicle;
    type: string;
}
