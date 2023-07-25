const sumar = requiere("./index.js");
const restar = requiere("./index.js");
const multiplicar = requiere("./index.js");
const dividir = requiere("./index.js");

test('should sum two numbers', () => { 
    //ARRANGE
    const num1 = 1
    const num2 = 2
    
    //ACT
    const result = sumar(num1, num2)

    //ASSERT
    expect(result).toBe(3)
})

test('should sum two numerical strings', () => { 
    //ARRANGE
    const num1 = "1"
    const num2 = "2"
    
    //ACT
    const result = sumar(num1, num2)

    //ASSERT
    expect(result).toBe(3)
})