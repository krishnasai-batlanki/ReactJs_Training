//rest operator
//can declare array of type any[]
//there should be only one array decalred with rest operator
//this should be the last argument as a parameter
function calAvg(name: string , ...marks:number[])
{
console.log(name+" "+marks)
}
calAvg('sai',10,20,20)
calAvg('sai',10,20,20,20)
calAvg('sai',10)