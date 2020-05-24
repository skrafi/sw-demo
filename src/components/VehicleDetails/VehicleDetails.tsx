import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../common/Button/Button';
import { Content } from '../common/Content/Content';
import { connect } from 'react-redux';
import { GlobalState } from '../../types/globalState';
import { PersonDetailsProps } from '../../types/person';
import { fetchPersonDetails } from '../../store/person/requests';
import { VehicleDetailsStyle } from './VehicleDetailsStyle';

export const VehicleDetailsComponent = () => {
    const history = useHistory();
    // const { id } = useParams();
    const handleBackClick = () => {
        history.goBack();
    };

    return (
        <Content>
            <Button backBtn text="&larr; Back" onClick={handleBackClick} />
            <VehicleDetailsStyle>Vehicle Details</VehicleDetailsStyle>
        </Content>
    );
};

interface Props {
    personDetails: PersonDetailsProps;
    getPersonDetails: (itemId: number) => void;
}

const mapStateToProps = (state: GlobalState) => ({
    personDetails: state.person.personDetails,
});

const mapDispatchToProps = (dispatch: any) => ({
    getPersonDetails: (id: number) => dispatch(fetchPersonDetails(id)),
});
export const VehicleDetails = connect(mapStateToProps, mapDispatchToProps)(VehicleDetailsComponent);