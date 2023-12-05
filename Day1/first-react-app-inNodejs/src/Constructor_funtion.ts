function person(public name:String,id:number,sal:number): void
{
    this.name = name
    this.id = id
    this.sal = sal
    console.log(name+" "+id+" "+sal)
}
const anilref = new person('anil',1,100)
console.log(anilref)