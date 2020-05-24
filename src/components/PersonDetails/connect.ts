import { connect } from 'react-redux';
import { GlobalState } from '../../types/globalState';
import { fetchPersonDetails } from '../../store/person/requests';
import { PersonDetailsComponent } from './PersonDetails';

const mapStateToProps = (state: GlobalState) => ({
    personLoading: state.person.personLoading,
    personDetails: state.person.personDetails,
});

const mapDispatchToProps = (dispatch: any) => ({
    getPersonDetails: (id: number) => dispatch(fetchPersonDetails(id)),
});
export const PersonDetails = connect(mapStateToProps, mapDispatchToProps)(PersonDetailsComponent);
