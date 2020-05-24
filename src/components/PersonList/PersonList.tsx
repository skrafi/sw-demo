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

interface Props {
    personList: Person[];
    listLoading: boolean;
    getPersonList: () => void;
}

export const PersonListComponent = ({ personList: personListProps, getPersonList, listLoading }: Props) => {
    const [personList, setPersonList] = React.useState(personListProps);

    React.useEffect(() => {
        setPersonList(personListProps);
    }, [personListProps]);

    React.useEffect(() => {
        getPersonList();
    }, [getPersonList]);

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
        </Content>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    personList: state.person.personList,
    listLoading: state.person.listLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
    getPersonList: () => dispatch(fetchPersonList()),
});
export const PersonList = connect(mapStateToProps, mapDispatchToProps)(PersonListComponent);
