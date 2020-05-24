import React, { ChangeEvent } from 'react';
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
import { Button } from '../common/Button/Button';
import { SearchInput } from '../common/SearchInput/SearchInput';

interface Props {
    personList: Person[];
    listLoading: boolean;
    personListCount: number;
    personSearch: string;
    getPersonList: (page: number, search?: string) => void;
    updatePersonSearch: (search: string) => void;
}

export const PersonListComponent = ({
    personList: personListProps,
    getPersonList,
    listLoading,
    personListCount,
    personSearch,
    updatePersonSearch,
}: Props) => {
    const [personList, setPersonList] = React.useState(personListProps);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        setPersonList(personListProps);
    }, [personListProps]);

    React.useEffect(() => {
        getPersonList(page, personSearch);
    }, [page]);

    const handleClick = (page: number) => {
        setPage(page);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updatePersonSearch(e.target.value);
    };

    const search = () => {
        getPersonList(1, personSearch);
        setPage(1);
    };

    return (
        <Content>
            <Header>
                People
                <div>
                    <SearchInput value={personSearch} onChange={handleChange} />
                    <Button text="Search" onClick={search} />
                </div>
            </Header>
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
    personSearch: state.person.personSearch,
});

const mapDispatchToProps = (dispatch: any) => ({
    getPersonList: (page: number, search?: string) => dispatch(fetchPersonList(page, search)),
    updatePersonSearch: (search: string) => dispatch({ type: 'UPDATE_PERSON_SEARCH', payload: search }),
});
export const PersonList = connect(mapStateToProps, mapDispatchToProps)(PersonListComponent);
