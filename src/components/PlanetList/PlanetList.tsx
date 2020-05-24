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
import { Pagination } from '../common/Pagination/Pagination';

interface Props {
    planetList: Planet[];
    planetListCount: number;
    listLoading: boolean;
    getPlanetList: (page: number) => void;
}

export const PlanetListComponent = ({
    planetList: planetListProps,
    getPlanetList,
    listLoading,
    planetListCount,
}: Props) => {
    const [planetList, setPlanetList] = React.useState(planetListProps);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        setPlanetList(planetListProps);
    }, [planetListProps]);

    React.useEffect(() => {
        getPlanetList(page);
    }, [getPlanetList, page]);

    const handleClick = (page: number) => {
        setPage(page);
    };

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
            <Pagination count={planetListCount} handleClick={handleClick} currentPage={page} />
        </Content>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    planetList: state.planet.planetList,
    planetListCount: state.planet.planetListCount,
    listLoading: state.planet.listLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
    getPlanetList: (page: number) => dispatch(fetchPlanetList(page)),
});
export const PlanetList = connect(mapStateToProps, mapDispatchToProps)(PlanetListComponent);
