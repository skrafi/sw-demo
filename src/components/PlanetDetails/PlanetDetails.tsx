import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '../common/Button/Button';
import { Content } from '../common/Content/Content';
import { PlanetDetailsProps } from '../../types/planet';
import { PlanetDetailsStyle } from './PlanetDetailsStyle';
import { LoaderView } from '../common/Loader/LoaderView';
import { RowSingleValue } from '../common/RowSingleValue/RowSinglValue';
import { RowMultipleValue } from '../common/RowMultipleValue/RowMultipleValue';
import { Details, DetailsCardStyle, DetsailsCardInner } from '../common/Details/Details';
import { BigPhoto } from '../common/BigPhoto/BigPhoto';

export const PlanetDetailsComponent = ({
    planetDetails: planetDetailsProps,
    getPlanetDetails,
    planetLoading,
}: Props) => {
    const history = useHistory();
    const { id } = useParams();
    const [planetDetails, setPlanetDetails] = React.useState(planetDetailsProps);
    const handleBackClick = () => {
        history.push('/people');
    };

    React.useEffect(() => {
        setPlanetDetails(planetDetailsProps);
    }, [planetDetailsProps]);

    React.useEffect(() => {
        getPlanetDetails(id);
        return () => {
            setPlanetDetails(null);
        };
    }, [getPlanetDetails, id]);

    return (
        <Content>
            <Button backBtn text="&larr; Back" onClick={handleBackClick} />
            {planetLoading ? (
                <LoaderView />
            ) : (
                <PlanetDetailsStyle>
                    {planetDetails && (
                        <>
                            <h1>{planetDetails.name}</h1>
                            <Details>
                                <DetailsCardStyle>
                                    <DetsailsCardInner>
                                        <RowSingleValue value={planetDetails.population} title="Population" />
                                        <RowMultipleValue
                                            listReference={planetDetails.residents}
                                            title="Residents"
                                            urlType="people"
                                        />
                                    </DetsailsCardInner>
                                </DetailsCardStyle>
                                <BigPhoto type="planet" />
                            </Details>
                        </>
                    )}
                </PlanetDetailsStyle>
            )}
        </Content>
    );
};

interface Props {
    planetDetails: PlanetDetailsProps | null;
    planetLoading: boolean;
    getPlanetDetails: (planetId: number) => void;
}
