const matemaatilisedArvutused = require('./index'); // Import your function

test('adds two numbers correctly', () => {
    const result = matemaatilisedArvutused(10, 5);
    expect(result.summa).toBe(15);
});

test('subtracts two numbers correctly', () => {
    const result = matemaatilisedArvutused(10, 5);
    expect(result.vahe).toBe(5);
});

test('calculates the division correctly', () => {
    const result = matemaatilisedArvutused(10, 5);
    expect(result.jagatis).toBe(2);
});

test('calculates the square of a number correctly', () => {
    const result = matemaatilisedArvutused(10, 5);
    expect(result.korrutis).toBe(100);
});
