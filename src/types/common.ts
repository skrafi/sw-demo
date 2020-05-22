export interface ButtonProps {
    text: string;
    onClick: () => void;
}

export interface Action {
    type: string;
    payload?: any;
}
