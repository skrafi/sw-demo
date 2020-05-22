import React from 'react';
import { connect } from 'react-redux';

import { fetchPersonList } from '../../store/person/requests';
import { Person } from '../../types/person';

export const PersonListComponent = (props: any) => {
    const [personList, setPersonList] = React.useState(props.personList);

    React.useEffect(() => {
        setPersonList(props.personList);
    }, [props.personList]);

    React.useEffect(() => {
        props.getPersonList();
    }, []);

    return (
        <>
            {personList.map((person: Person) => (
                <div key={person.name}>{person.name}</div>
            ))}
        </>
    );
};

const mapStateToProps = (state: any) => ({
    personList: state.person.personList,
});

const mapDispatchToProps = (dispatch: any) => ({
    getPersonList: () => dispatch(fetchPersonList()),
});
export const PersonList = connect(mapStateToProps, mapDispatchToProps)(PersonListComponent);
