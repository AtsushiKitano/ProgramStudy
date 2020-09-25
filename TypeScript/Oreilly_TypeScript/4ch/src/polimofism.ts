type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}

let filter: Filter = (array, f) => {
    let datas = [];
    for (let i = 0; i < array.length ; i++) {
        if (f(array[i])){
            datas.push(array[i])
        }
    }
    return datas
}

console.log(filter([1,2,3], _ => _ < 2))
console.log(filter(['a', 'b'], _ => _ !== 'b'))

let poli_names = [
    {firstName: 'beth'},
    {firstName: 'caitlyn'},
    {firstName: 'xin'},
]
console.log(filter(poli_names, _ => _.firstName !== 'xin'))
