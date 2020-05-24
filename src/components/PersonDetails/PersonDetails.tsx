import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '../common/Button/Button';
import { Content } from '../common/Content/Content';
import { PersonDetailsProps } from '../../types/person';
import { PersonDetailsStyle } from './PersonDetailsStyle';
import { LoaderView } from '../common/Loader/LoaderView';
import { RowSingleValue } from '../common/RowSingleValue/RowSinglValue';
import { RowMultipleValue } from '../common/RowMultipleValue/RowMultipleValue';
import { Details, DetailsCardStyle, DetsailsCardInner } from '../common/Details/Details';
import { BigPhoto } from '../common/BigPhoto/BigPhoto';

export const PersonDetailsComponent = ({
    personDetails: personDetailsProps,
    getPersonDetails,
    personLoading,
}: Props) => {
    const history = useHistory();
    const { id } = useParams();
    const [personDetails, setPersonDetails] = React.useState(personDetailsProps);
    const handleBackClick = () => {
        history.push('/people');
    };

    React.useEffect(() => {
        setPersonDetails(personDetailsProps);
    }, [personDetailsProps]);

    React.useEffect(() => {
        getPersonDetails(id);
        return () => {
            setPersonDetails(null);
        };
    }, [getPersonDetails, id]);

    return (
        <Content>
            <Button backBtn text="&larr; Back" onClick={handleBackClick} />
            {personLoading ? (
                <LoaderView />
            ) : (
                <PersonDetailsStyle>
                    {personDetails && (
                        <>
                            <h1>{personDetails.name}</h1>
                            <Details>
                                <BigPhoto type="person" />
                                <DetailsCardStyle>
                                    <DetsailsCardInner>
                                        <RowSingleValue
                                            title="Homeworld"
                                            reference={personDetails.homeworld}
                                            urlType="planets"
                                        />
                                        <RowMultipleValue title="Species" listValue={personDetails.species} />
                                        <RowMultipleValue
                                            title="Vehicles"
                                            listReference={personDetails.vehicles}
                                            urlType="vehicles"
                                        />
                                    </DetsailsCardInner>
                                </DetailsCardStyle>
                            </Details>
                        </>
                    )}
                </PersonDetailsStyle>
            )}
        </Content>
    );
};

interface Props {
    personDetails: PersonDetailsProps | null;
    personLoading: boolean;
    getPersonDetails: (personId: number) => void;
}
