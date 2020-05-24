/* eslint-disable @typescript-eslint/camelcase */
import { camelCaseKeys } from '../camelCaseKeys';

describe('camelCaseKeys', () => {
    const example = {
        some_name: 'test1',
        test_prop: 'test2',
    };
    it('should change snakecase to camelcase', () => {
        const formatted: any = camelCaseKeys(example);
        expect(formatted).toHaveProperty('someName');
        expect(formatted).toHaveProperty('testProp');
        expect(example).toHaveProperty('some_name');
        expect(example).toHaveProperty('test_prop');
    });
});
