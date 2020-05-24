import React from 'react';
import { connect } from 'react-redux';

import { fetchPersonList } from '../../store/person/requests';
import { Person } from '../../types/person';
import { PersonListStyle } from './PersonListStyle';
import { GlobalState } from '../../types/globalState';
import { Header } from '../common/Header/Header';
import { Content } from '../common/Content/Content';
import { LoaderView } from '../common/Loader/LoaderView';
import { ItemCard } from '../common/ItemCard/ItemCard';
import { Pagination } from '../common/Pagination/Pagination';

interface Props {
    personList: Person[];
    listLoading: boolean;
    personListCount: number;
    getPersonList: (page: number) => void;
}

export const PersonListComponent = ({
    personList: personListProps,
    getPersonList,
    listLoading,
    personListCount,
}: Props) => {
    const [personList, setPersonList] = React.useState(personListProps);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        setPersonList(personListProps);
    }, [personListProps]);

    React.useEffect(() => {
        getPersonList(page);
    }, [getPersonList, page]);

    const handleClick = (page: number) => {
        setPage(page);
    };

    return (
        <Content>
            <Header>People</Header>
            {listLoading ? (
                <LoaderView />
            ) : (
                <PersonListStyle>
                    {personList.map((person: Person) => (
                        <ItemCard type="people" key={person.name} item={person} />
                    ))}
                </PersonListStyle>
            )}
            <Pagination count={personListCount} handleClick={handleClick} currentPage={page} />
        </Content>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    personList: state.person.personList,
    personListCount: state.person.personListCount,
    listLoading: state.person.listLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
    getPersonList: (page: number) => dispatch(fetchPersonList(page)),
});
export const PersonList = connect(mapStateToProps, mapDispatchToProps)(PersonListComponent);
