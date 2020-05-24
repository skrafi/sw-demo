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
import { Pagination } from '../common/Pagination/Pagination';

interface Props {
    vehicleList: Vehicle[];
    vehicleListCount: number;
    listLoading: boolean;
    getVehicleList: (page: number) => void;
}

export const VehicleListComponent = ({
    vehicleList: vehicleListProps,
    getVehicleList,
    listLoading,
    vehicleListCount,
}: Props) => {
    const [vehicleList, setVehicleList] = React.useState(vehicleListProps);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        setVehicleList(vehicleListProps);
    }, [vehicleListProps]);

    React.useEffect(() => {
        getVehicleList(page);
    }, [getVehicleList, page]);

    const handleClick = (page: number) => {
        setPage(page);
    };

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
            <Pagination count={vehicleListCount} handleClick={handleClick} currentPage={page} />
        </Content>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    vehicleList: state.vehicle.vehicleList,
    vehicleListCount: state.vehicle.vehicleListCount,
    listLoading: state.vehicle.listLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
    getVehicleList: (page: number) => dispatch(fetchVehicleList(page)),
});
export const VehicleList = connect(mapStateToProps, mapDispatchToProps)(VehicleListComponent);
