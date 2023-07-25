const { sumar, restar, multiplicar, dividir } = require("./index.js");

//SUMAR
///////////////////////////////////////////////////////////////////////////////////////

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
    expect(result).toBe("12")
})

test('should sum two negative numbers', () => {
    //ARRANGE
    const num1 = -2
    const num2 = -2

    //ACT
    const result = sumar(num1, num2)

    //ASSERT
    expect (result).toBe(-4)
})

test('should sum two numbers one positive and one negative', () => {
    const num1 = 2
    const num2 = -2

    const result = sumar(num1, num2)
    
    expect (result).toBe(0)
})

//RESTAR
///////////////////////////////////////////////////////////////////////////////////////

test('should rest two numbers', () => { 
    //ARRANGE
    const num1 = 4
    const num2 = 2
    
    //ACT
    const result = restar(num1, num2)

    //ASSERT
    expect(result).toBe(2)
})

test('should rest two numerical strings', () => { 
    //ARRANGE
    const num1 = "1"
    const num2 = "2"
    
    //ACT
    const result = restar(num1, num2)

    //ASSERT
    expect(result).toBe(-1)
})

test('should rest two negative numbers', () => {
    //ARRANGE
    const num1 = -2
    const num2 = -2

    //ACT
    const result = restar(num1, num2)

    //ASSERT
    expect (result).toBe(0)
})

test('should rest two numbers one positive and one negative', () => {
    const num1 = 2
    const num2 = -2

    const result = restar(num1, num2)
    
    expect (result).toBe(4)
})

//MULTIPLICAR
///////////////////////////////////////////////////////////////////////////////////////

test('should multiply two numbers', () => { 
    //ARRANGE
    const num1 = 1
    const num2 = 2
    
    //ACT
    const result = multiplicar(num1, num2)

    //ASSERT
    expect(result).toBe(2)
})

test('should multiply two numerical strings', () => { 
    //ARRANGE
    const num1 = "1"
    const num2 = "2"
    
    //ACT
    const result = multiplicar(num1, num2)

    //ASSERT
    expect(result).toBe(2)
})

test('should multiply two negative numbers', () => {
    //ARRANGE
    const num1 = -2
    const num2 = -2

    //ACT
    const result = multiplicar(num1, num2)

    //ASSERT
    expect (result).toBe(4)
})

test('should multiply two numbers one positive and one negative', () => {
    const num1 = 2
    const num2 = -2

    const result = multiplicar(num1, num2)
    
    expect (result).toBe(-4)
})

//DIVIDIR
///////////////////////////////////////////////////////////////////////////////////////

test('should split two numbers', () => { 
    //ARRANGE
    const num1 = 1
    const num2 = 2
    
    //ACT
    const result = dividir(num1, num2)

    //ASSERT
    expect(result).toBe(0.5)
})

test('should split two numerical strings', () => { 
    //ARRANGE
    const num1 = "1"
    const num2 = "2"
    
    //ACT
    const result = dividir(num1, num2)

    //ASSERT
    expect(result).toBe(0.5)
})

test('should split two negative numbers', () => {
    //ARRANGE
    const num1 = -2
    const num2 = -2

    //ACT
    const result = dividir(num1, num2)

    //ASSERT
    expect (result).toBe(1)
})

test('should split two numbers one positive and one negative', () => {
    const num1 = 2
    const num2 = -2

    const result = dividir(num1, num2)
    
    expect (result).toBe(-1)
})