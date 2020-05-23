export interface ButtonProps {
    text: string;
    backBtn?: boolean;
    onClick: () => void;
}

export interface Action {
    type: string;
    payload?: any;
}
