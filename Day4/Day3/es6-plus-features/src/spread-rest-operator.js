const obj =
{
    id:1,
    name:"saoi",
    sal:"100"
}
const objOne =
{
    id:1,
    name:"saoi",
    sal:"100",
    temp:"dee"

}
// const obj_copy ={}

// // for (const propNamr in obj) {
// //     const propValue = obj[propNamr]
// //     obj_copy[propNamr] =propValue
// // }

const obj_copy =
{
    ...obj ,//spread operator(...)
    ...objOne
}
console.log(obj)
console.log(obj_copy)
