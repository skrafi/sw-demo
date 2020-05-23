import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '../common/Button/Button';
import { Content } from '../common/Content/Content';
import { connect } from 'react-redux';
import { GlobalState } from '../../types/globalState';
import { PersonDetailsProps, Reference } from '../../types/person';
import { fetchPersonDetails } from '../../store/person/requests';
import { PersonDetailsStyle } from './PersonDetailsStyle';
import { getIdFromUrl } from '../../helpers/getIdFromUrl';

export const PersonDetailsComponent = ({ personDetails: personDetailsProps, getPersonDetails }: Props) => {
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
    }, [getPersonDetails, id]);
    return (
        <Content>
            <Button backBtn text="&larr; Back" onClick={handleBackClick} />
            <PersonDetailsStyle>
                {personDetails && (
                    <>
                        <h2>{personDetails.name}</h2>
                        <h4>Species:</h4>
                        <ul>
                            {personDetails.species.map((s: Reference) => (
                                <li key={s.name} onClick={() => history.push(`/species/${getIdFromUrl(s.url)}`)}>
                                    {s.name}
                                </li>
                            ))}
                        </ul>
                        <h4>Homeworld:</h4>
                        {personDetails.homeworld.map((s: Reference) => (
                            <span key={s.name} onClick={() => history.push(`/planets/${getIdFromUrl(s.url)}`)}>
                                {s.name}
                            </span>
                        ))}
                        <h4>Vehicles:</h4>
                        <ul>
                            {personDetails.vehicles.map((s: Reference) => (
                                <li key={s.name} onClick={() => history.push(`/vehicles/${getIdFromUrl(s.url)}`)}>
                                    {s.name}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </PersonDetailsStyle>
        </Content>
    );
};

interface Props {
    personDetails: PersonDetailsProps;
    getPersonDetails: (personId: number) => void;
}

const mapStateToProps = (state: GlobalState) => ({
    personDetails: state.person.personDetails,
});

const mapDispatchToProps = (dispatch: any) => ({
    getPersonDetails: (id: number) => dispatch(fetchPersonDetails(id)),
});
export const PersonDetails = connect(mapStateToProps, mapDispatchToProps)(PersonDetailsComponent);
