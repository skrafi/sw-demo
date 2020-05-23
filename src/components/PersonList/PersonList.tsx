import React from 'react';
import { connect } from 'react-redux';

import { fetchPersonList } from '../../store/person/requests';
import { Person } from '../../types/person';
import { PersonCard } from '../common/PersonCard/PersonCard';
import { PersonListStyle } from './PersonListStyle';
import { GlobalState } from '../../types/globalState';

interface Props {
    personList: Person[];
    getPersonList: () => void;
}

export const PersonListComponent = ({ personList: personListProps, getPersonList }: Props) => {
    const [personList, setPersonList] = React.useState(personListProps);

    React.useEffect(() => {
        setPersonList(personListProps);
    }, [personListProps]);

    React.useEffect(() => {
        getPersonList();
    }, [getPersonList]);

    return (
        <PersonListStyle>
            {personList.map((person: Person) => (
                <PersonCard key={person.name} person={person} />
            ))}
        </PersonListStyle>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    personList: state.person.personList,
});

const mapDispatchToProps = (dispatch: any) => ({
    getPersonList: () => dispatch(fetchPersonList()),
});
export const PersonList = connect(mapStateToProps, mapDispatchToProps)(PersonListComponent);
