export interface ButtonProps {
    text: string;
    backBtn?: boolean;
    onClick: () => void;
}

export interface Action {
    type: string;
    payload?: any;
}

export interface Reference {
    name: string;
    url: string;
}
