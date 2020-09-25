function* createFibonacciGenerator() {
    let a = 0
    let b = 1
    while(true) {
        yield a;
        [a,b] = [b, a + b]
    }
}

let fibonacciGenerator = createFibonacciGenerator()
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())


function* createNumbers(): Generator<number> {
    let n = 0
    while(true) {
        yield n++
    }
}

let cnums  = createNumbers()
for (let i = 0; i < 10 ; i++) {
    console.log(cnums.next())
}
