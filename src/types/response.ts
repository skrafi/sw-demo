interface ResponseData {
    count: number;
    next: string;
    previous: string;
    results: any[];
}

export interface Response {
    data: ResponseData;
}
