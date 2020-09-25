function log(message: string, userId?: string) {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, userId || 'Not signed in')
}

log("hello function")
log("hello userId", "test")

type Context = {
    appId?: string
    userId?: string
}

function contextLog(message: string, context: Context = {}) {
    let time = new Date().toISOString()
    console.log(time,message,context.userId)
}

contextLog("test", {appId: "poke", userId: "poepoe"})
contextLog("nocontex")


function sum(numbers: number[]): number {
    return numbers.reduce((total,n) => total + n, 0)
}


console.log(sum([1,2,3,4]))

// rest parameter 引数を配列に格納し取り扱う
function sumVariadicSafe(...numbers: number[]): number {
    return numbers.reduce((totlal, n) => totlal + n, 0)
}

console.log(sumVariadicSafe(1,2,3,4,5,6,7,8,9,10)) //1~10までの要素は、配列で指定しない
