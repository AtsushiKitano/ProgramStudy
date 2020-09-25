let obj1 : {
    firstName : string
    lastName : string
} = {
    firstName : 'John',
    lastName : 'barrowman'
}

class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ) {}
}

obj1 = new Person('Matt', 'Smith')
console.log(obj1)

let obj2 : {
    name: string
    age?: number
    [key: number]: boolean
}

obj2 = {name: "abc"}
console.log(obj2)
obj2 = {name: "test", age: 11 , 10: true, 11: false}
console.log(obj2)


let airplaneSeatingAssignments: {
    [seatNumber: string]: string
} = {
    "34D": "Boris Cherny",
    "34E": "Bill Gates"
}

console.log(airplaneSeatingAssignments["34D"])
