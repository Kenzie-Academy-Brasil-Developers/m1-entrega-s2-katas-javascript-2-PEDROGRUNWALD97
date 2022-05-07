// comece a criar a sua função add na linha abaixo
function add(x, y) {
    return x + y
}
console.log(add(3,5))
// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo
function multiply(x, y) {
    let resultado = 0
    for (let i = 1; i <= y; i++) {
        resultado = add(resultado, x)
    }
    return resultado
}
console.log(multiply(4,6))
// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

// comece a criar a sua função power na linha abaixo
function power(x, z) {
    let resultado = 1
    for (let i = 1; i <= z; i++) {
        resultado = multiply(x, resultado)
    }
    return resultado
}
console.log(power(4,3))
// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

// comece a criar a sua função factorial na linha abaixo
function factorial(x) {
    let fact = x
    let i = x
    while (i > 1) {
        --i
        fact = multiply(fact, i)
    }
    return fact
}
console.log(factorial(5))
// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

//* BONUS (aviso: o grau de dificuldade é bem maior !!!)
// */

// crie a função fibonacci
function fibonacci(n) {
    let fib = [0]
    let adicionar = 1
    for (let i = 0; i <= n; i = add(i, 1)) {
        fib.push(add(fib[i], adicionar))
        adicionar = fib[i]
    }
    return fib[n]
}
console.log(fibonacci(7))
// descomente a linha seguinte para testar sua função
 console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');