import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '../common/Button/Button';
import { Content } from '../common/Content/Content';
import { VehicleDetailsProps } from '../../types/vehicle';
import { VehicleDetailsStyle } from './VehicleDetailsStyle';
import { LoaderView } from '../common/Loader/LoaderView';
import { RowSingleValue } from '../common/RowSingleValue/RowSinglValue';
import { RowMultipleValue } from '../common/RowMultipleValue/RowMultipleValue';
import { Details, DetailsCardStyle, DetsailsCardInner } from '../common/Details/Details';
import { BigPhoto } from '../common/BigPhoto/BigPhoto';

export const VehicleDetailsComponent = ({
    vehicleDetails: vehicleDetailsProps,
    getVehicleDetails,
    vehicleLoading,
}: Props) => {
    const history = useHistory();
    const { id } = useParams();
    const [vehicleDetails, setVehicleDetails] = React.useState(vehicleDetailsProps);
    const handleBackClick = () => {
        history.push('/people');
    };

    React.useEffect(() => {
        setVehicleDetails(vehicleDetailsProps);
    }, [vehicleDetailsProps]);

    React.useEffect(() => {
        getVehicleDetails(id);
        return () => {
            setVehicleDetails(null);
        };
    }, [getVehicleDetails, id]);

    return (
        <Content>
            <Button backBtn text="&larr; Back" onClick={handleBackClick} />
            {vehicleLoading ? (
                <LoaderView />
            ) : (
                <VehicleDetailsStyle>
                    {vehicleDetails && (
                        <>
                            <h1>{vehicleDetails.name}</h1>
                            <Details reverse>
                                <BigPhoto type="vehicle" reverse />
                                <DetailsCardStyle>
                                    <DetsailsCardInner>
                                        <RowSingleValue value={vehicleDetails.vehicleClass} title="Type" />
                                        <RowMultipleValue
                                            listReference={vehicleDetails.pilots}
                                            title="Pilots"
                                            urlType={'people'}
                                        />
                                    </DetsailsCardInner>
                                </DetailsCardStyle>
                            </Details>
                        </>
                    )}
                </VehicleDetailsStyle>
            )}
        </Content>
    );
};

interface Props {
    vehicleDetails: VehicleDetailsProps | null;
    vehicleLoading: boolean;
    getVehicleDetails: (vehicleId: number) => void;
}
