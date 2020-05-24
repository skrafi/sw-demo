import styled from '@emotion/styled';
import person from '../../../assets/images/person.png';
import vehicle from '../../../assets/images/vehicle.png';
import planet from '../../../assets/images/planet.png';

const getImage = (cardType: string) => {
    switch (cardType) {
        case 'people':
            return person;
        case 'planets':
            return planet;
        case 'vehicles':
            return vehicle;
        default:
            return person;
    }
};

export const ItemCardAvatar = styled.div<{ cardType: string }>`
    width: 100%;
    height: 80%;

    align-self: center;
    background-image: url(${({ cardType }) => getImage(cardType)});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    margin-bottom: 8px;
`;
