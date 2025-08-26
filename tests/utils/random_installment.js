export function generateNumbers(minOrMax, maybeMax) {
    const min = maybeMax !== undefined ? minOrMax : 1;
    const max = maybeMax !== undefined ? maybeMax : minOrMax;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
