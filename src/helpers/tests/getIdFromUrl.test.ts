import { getIdFromUrl } from '../getIdFromUrl';

describe('getIdFromUrl', () => {
    it('should take last value from url', () => {
        const example = 'test.com/5/sad/12/';

        const id = getIdFromUrl(example);
        expect(id).toBe('12');
    });
});
