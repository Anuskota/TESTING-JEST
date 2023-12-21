// Imports

const { expect } = require("@jest/globals")
const FizzBuzz = require("../FizzBuzz")



// Feature para saber cuando un numero es primo de 3 y de 5.
//     1.Cuando el usuario digitalice un numero divisible por 3, devuelve Fizz,
//     2.Cuando el usuario digitalice un numero divisible por 5, devuelve Buzz,
//     3.Cuando el usuario digitalice un numero divisible por 3 y 5, devuelve FizzBuzz,
//     4. Cuando el usuario digitalice un numero y no sea divisible por 3 y 5, devuelve el numero.

const fizz_buzz = new FizzBuzz();

//Los tests con Jest se comienzan con describe
describe('Tests que validen los multiplos de 3 y 5', () => {

    test('Test devuelve Fizz cuando divisible por 3', () => {
        /**
         * GHERKIN TEST
         *  GIVEN / ARRANGE: un numero 
         * WHEN / ACT este sea divisible por 3
         * THEN / ASSERT devuelve Fizz como resultado
         * 
         */

        //ARANGE: preparar el escenario
        const numero_ingresado = 3;
        const respuesta_esperada = "Fizz";
        

        //ACT :Ejecutar el escenario 
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado)

        //ASSERT: comprobar el escenario

        expect(respuesta_recibida).toBe(respuesta_esperada);
  
    });

    test('Test devuelve Buzz cuando divisible por 5', () => {
        /**
         * GHERKIN TEST
         *  GIVEN / ARRANGE: un numero 
         * WHEN / ACT este sea divisible por 5
         * THEN / ASSERT devuelve Buzz como resultado
         * 
         */

        //ARANGE: preparar el escenario
        const numero_ingresado = 5;
        const respuesta_esperada = "Buzz";


        //ACT :Ejecutar el escenario 
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado)

        //ASSERT: comprobar el escenario

        expect(respuesta_recibida).toBe(respuesta_esperada);
  
    });


    test('Test devuelve FizzBuzz cuando divisible por 3 y 5', () => {
        /**
         * GHERKIN TEST
         *  GIVEN / ARRANGE: un numero 
         * WHEN / ACT este sea divisible por 5 y 3
         * THEN / ASSERT devuelve FizzBuzz como resultado
         * 
         */

        //ARANGE: preparar el escenario
        const numero_ingresado = 15;
        const respuesta_esperada = "FizzBuzz";
    

        //ACT :Ejecutar el escenario 
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado)

        //ASSERT: comprobar el escenario

        expect(respuesta_recibida).toBe(respuesta_esperada);
  
    });

    test('Test devuelve numero_ingresado cuando no es divisible por 3 y 5', () => {
        /**
         * GHERKIN TEST
         *  GIVEN / ARRANGE: un numero 
         * WHEN / ACT este no sea divisible por 5 y 3
         * THEN / ASSERT devuelve el numero como resultado
         * 
         */

        //ARANGE: preparar el escenario
        const numero_ingresado = 4;
        const respuesta_esperada = numero_ingresado;
    

        //ACT :Ejecutar el escenario 
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado)

        //ASSERT: comprobar el escenario

        expect(respuesta_recibida).toBe(respuesta_esperada);
  
    });




})