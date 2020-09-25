type Greet = (name: string) => string
type Log = (message: string, userId?: string) => void
type SumVariadicSafe = (...numbers: number[]) => number

let call_sig_log: Log = (
    message,
    userId= 'Not Signed in'
) => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}

let call_greet: Greet = (name) => { return "Hello " + name}

let call_sumVar : SumVariadicSafe = (...numbers) => {
    return [...numbers].reduce((total,n) => total + n)
}

call_sig_log("test", "kdi98")
console.log(call_greet("test"))
console.log(call_sumVar(1,2,3,4,5,6,7))
