import { connect } from 'react-redux';
import { GlobalState } from '../../types/globalState';
import { fetchVehicleDetails } from '../../store/vehicle/requests';
import { VehicleDetailsComponent } from './VehicleDetails';

const mapStateToProps = (state: GlobalState) => ({
    vehicleLoading: state.vehicle.vehicleLoading,
    vehicleDetails: state.vehicle.vehicleDetails,
});

const mapDispatchToProps = (dispatch: any) => ({
    getVehicleDetails: (id: number) => dispatch(fetchVehicleDetails(id)),
});
export const VehicleDetails = connect(mapStateToProps, mapDispatchToProps)(VehicleDetailsComponent);
