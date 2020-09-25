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

type TreeNode = {
    value: string
}

type LeafNode = TreeNode & {
    isLeaf : boolean
}

type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
}

function mapNode<T extends TreeNode> (
    node: T,
    f: (value: string) => string
): T{
    return {
        ...node,  // 引数のnodeの値を展開
        value: f(node.value) // valueを上書き
    }
}

let tree_a: TreeNode = { value: 'a'}
let tree_b: LeafNode = { value: 'b', isLeaf: true}
let tree_c: InnerNode = { value: 'c', children: [tree_b]}

let tree_a1 = mapNode(tree_a, _ => _.toUpperCase())
let tree_b1 = mapNode(tree_b, _ => _.toUpperCase())
let tree_c1 = mapNode(tree_c, _ => _.toUpperCase())

console.log(tree_a1)
console.log(tree_b1)
console.log(tree_c1)


type HasSides = {numberOfSides: number}
type SidesHaveLength = {sideLength: number}
type Square = HasSides & SidesHaveLength

function logPerimeter<
    Shape extends HasSides & SidesHaveLength
    >(s: Shape): Shape {
        console.log(s.numberOfSides * s.sideLength)
        return s
    }

let square: Square = {numberOfSides: 4, sideLength: 3}
logPerimeter(square)

function call_g<T extends unknown[], R>(
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args)
}

function fill(length: number, value: string): string[] {
    return Array.from({length}, () => value)
}

let call_a = call_g(fill, 10, "a")
console.log(call_a)

console.log(Array.from({length:3}, (_,i) => i+1 )) //length プロパティをArrayオブジェクトが持っている => lengthでなければならない
