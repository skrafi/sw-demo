import { connect } from 'react-redux';
import { GlobalState } from '../../types/globalState';
import { fetchPlanetDetails } from '../../store/planet/requests';
import { PlanetDetailsComponent } from './PlanetDetails';

const mapStateToProps = (state: GlobalState) => ({
    planetLoading: state.planet.planetLoading,
    planetDetails: state.planet.planetDetails,
});

const mapDispatchToProps = (dispatch: any) => ({
    getPlanetDetails: (id: number) => dispatch(fetchPlanetDetails(id)),
});
export const PlanetDetails = connect(mapStateToProps, mapDispatchToProps)(PlanetDetailsComponent);
