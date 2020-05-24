export interface Person {
    id: number;
    name: string;
    url: string;
    species: string[];
    homeworld: string;
    vehicles: string[];
}

export interface Reference {
    name: string;
    url: string;
}

export interface PersonDetailsProps {
    id: number;
    name: string;
    url: string;
    species: Reference[];
    homeworld: Reference;
    vehicles: Reference[];
}
