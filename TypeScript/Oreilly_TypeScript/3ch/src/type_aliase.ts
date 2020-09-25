type Age = number

type Employee = {
    name: string
    age: Age
}

let hogera : Age = 23
//let hogehoge : Age = "test" (ERROR)

let gecy : Employee = {
    name: "Gecy",
    age: 11
}

console.log(gecy)

type Cat = {
    name: string,
    purrs: boolean
}

type Dog = {
    name: string,
    barks: boolean,
    wags: boolean
}

type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

let catordog : CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true,
    barks: true,
    wags: false
}


console.log(catordog)
