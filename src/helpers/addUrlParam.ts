export class UrlParamBuilder {
    url = '';
    private counter = 0;
    constructor(base: string) {
        this.url = base;
    }

    addParam = (name: string, value?: string | number) => {
        if (value === undefined || value === null) {
            return this;
        }
        if (this.counter === 0) {
            this.url = `${this.url}?${name}=${value}`;
            this.counter++;
        } else {
            this.url = `${this.url};${name}=${value}`;
        }
        return this;
    };
}
