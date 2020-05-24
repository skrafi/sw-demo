import React from 'react';
import { connect } from 'react-redux';

import { GlobalState } from '../../types/globalState';
import { Header } from '../common/Header/Header';
import { Content } from '../common/Content/Content';
import { LoaderView } from '../common/Loader/LoaderView';
import { PersonListStyle } from '../PersonList/PersonListStyle';
import { fetchVehicleList } from '../../store/vehicle/requests';
import { Vehicle } from '../../types/vehicle';
import { ItemCard } from '../common/ItemCard/ItemCard';

interface Props {
    vehicleList: Vehicle[];
    listLoading: boolean;
    getVehicleList: () => void;
}

export const VehicleListComponent = ({ vehicleList: vehicleListProps, getVehicleList, listLoading }: Props) => {
    const [vehicleList, setVehicleList] = React.useState(vehicleListProps);

    React.useEffect(() => {
        setVehicleList(vehicleListProps);
    }, [vehicleListProps]);

    React.useEffect(() => {
        getVehicleList();
    }, [getVehicleList]);

    return (
        <Content>
            <Header>Vehicles</Header>
            {listLoading ? (
                <LoaderView />
            ) : (
                <PersonListStyle>
                    {vehicleList.map((vehicle: Vehicle) => (
                        <ItemCard type="vehicles" key={vehicle.name} item={vehicle} />
                    ))}
                </PersonListStyle>
            )}
        </Content>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    vehicleList: state.vehicle.vehicleList,
    listLoading: state.vehicle.listLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
    getVehicleList: () => dispatch(fetchVehicleList()),
});
export const VehicleList = connect(mapStateToProps, mapDispatchToProps)(VehicleListComponent);
