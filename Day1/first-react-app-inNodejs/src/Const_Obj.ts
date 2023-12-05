const objRef = {
    name : 'Sai',
    id: 1,
    sal: 100,
    sai: function()
{
    return this.name+" "+this.id+" "+this.sal
}
}
console.log(objRef.id)
console.log(objRef['id'])
console.log(objRef.sai)
