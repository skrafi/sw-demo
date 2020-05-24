export const camelCaseKeys = (obj: ObjectType) => {
    return Object.keys(obj).reduce((acc, key) => {
        const newKey = key.replace(/(_\w)/g, function (k) {
            return k[1].toUpperCase();
        });
        return { ...acc, [newKey]: obj[key] };
    }, {});
};

export interface ObjectType {
    [key: string]: any;
}
