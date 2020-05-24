import { UrlParamBuilder } from '../addUrlParam';

describe('addUrlParam', () => {
    let builder: UrlParamBuilder;
    const baseUrl = 'test';
    beforeEach(() => {
        builder = new UrlParamBuilder(baseUrl);
    });
    it('should create new builder', () => {
        expect(builder.url).toEqual(baseUrl);
    });
    it('should add page to as param', () => {
        const url = builder.addParam('page', 13).url;
        const expected = `${baseUrl}?page=13`;
        expect(url).toEqual(expected);
    });
    it('should not add param if not provided', () => {
        const url = builder.addParam('page').url;
        expect(url).toEqual(baseUrl);
    });
    it('should add second param', () => {
        const url = builder.addParam('page', 13).addParam('search', 'asd').url;
        const expected = `${baseUrl}?page=13;search=asd`;

        expect(url).toEqual(expected);
    });
});
