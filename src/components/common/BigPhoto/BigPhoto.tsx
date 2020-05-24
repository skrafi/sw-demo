import styled from '@emotion/styled';
import person from '../../../assets/images/stortrooper.jpg';
import planet from '../../../assets/images/stortrooper.jpg';
import vehicle from '../../../assets/images/stortrooper.jpg';

interface Props {
    type: any;
}

const getType = (type: string) => {
    switch (type) {
        case 'person':
            return person;
        case 'planet':
            return planet;
        case 'vehicle':
            return vehicle;
        default:
            return person;
    }
};

export const BigPhoto = styled.div<Props>`
    width: 400px;
    height: 400px;

    flex: 0 0 400px;
    align-self: center;
    background-image: url(${({ type }) => getType(type)});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;

    margin-right: 32px;
`;
