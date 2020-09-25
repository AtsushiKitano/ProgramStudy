function addBuild(a: number, b: number): number {
    return a + b
}

console.log(addBuild(10,20))
console.log(addBuild.apply(null,[10,20]))
console.log(addBuild.call(null,10,20))
console.log(addBuild.bind(null,10,20)())
