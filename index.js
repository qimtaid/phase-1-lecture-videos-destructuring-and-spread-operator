let arr = [1,2,3]
let arr2 = [...arr, 4]
// arr.push(4)
console.log(arr2)

let catObj  = {
    name: 'rose'
}

let catObj2 = {...catObj, age:9, name: 'ted'}
console.log(catObj)
console.log(catObj2)

let {name,age} = catObj2
console.log(name)
console.log(age)

let [color1, color2, color3] = ['red', 'blue', 'yellow']
console.log(color1)
console.log(color2)
console.log(color3)