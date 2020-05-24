import styled from '@emotion/styled';
import person from '../../../assets/images/person.png';
import planet from '../../../assets/images/planet.png';
import vehicle from '../../../assets/images/vehicle.png';

interface Props {
    type: string;
    reverse?: boolean;
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

    margin: ${({ reverse }) => (reverse ? '0 0 0 32px' : '0 32px 0 0')};
`;
