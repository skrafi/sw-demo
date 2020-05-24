import React from 'react';
import { connect } from 'react-redux';

import { GlobalState } from '../../types/globalState';
import { Header } from '../common/Header/Header';
import { Content } from '../common/Content/Content';
import { LoaderView } from '../common/Loader/LoaderView';
import { PersonListStyle } from '../PersonList/PersonListStyle';
import { fetchPlanetList } from '../../store/planet/requests';
import { Planet } from '../../types/planet';
import { ItemCard } from '../common/ItemCard/ItemCard';

interface Props {
    planetList: Planet[];
    listLoading: boolean;
    getPlanetList: () => void;
}

export const PlanetListComponent = ({ planetList: planetListProps, getPlanetList, listLoading }: Props) => {
    const [planetList, setPlanetList] = React.useState(planetListProps);

    React.useEffect(() => {
        setPlanetList(planetListProps);
    }, [planetListProps]);

    React.useEffect(() => {
        getPlanetList();
    }, [getPlanetList]);

    return (
        <Content>
            <Header>Planets</Header>
            {listLoading ? (
                <LoaderView />
            ) : (
                <PersonListStyle>
                    {planetList.map((planet: Planet) => (
                        <ItemCard type="planets" key={planet.name} item={planet} />
                    ))}
                </PersonListStyle>
            )}
        </Content>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    planetList: state.planet.planetList,
    listLoading: state.planet.listLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
    getPlanetList: () => dispatch(fetchPlanetList()),
});
export const PlanetList = connect(mapStateToProps, mapDispatchToProps)(PlanetListComponent);
