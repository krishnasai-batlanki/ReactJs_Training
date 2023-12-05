class Employee
{
    name:String;
    id:number;
    basic:number ;
    da:number;
    hra:number;
    totalSalary:number
    constructor(name: string, id: number, basic: number, da: number, hra: number) {
        this.name = name
        this.id = id
        this.basic = basic
        this.da =da
        this.hra = hra
        this.totalSalary = 0;
    }
    calculateSalary()
    {
        this.totalSalary = this.basic+this.da+this.hra;
    }

}
class Developer extends Employee
 {
    constructor(name: string, id: number, basic: number, da: number, hra: number, incentive: number)
    {
        super(name,id,basic,da,hra)
        super.calculateSalary()
        this.totalSalary += incentive
    }
}
class HR extends Employee
{
    
    constructor(name: string, id: number, basic: number, da: number, hra: number, gratutiy: number)
    {
        super(name,id,basic,da,hra)
        super.calculateSalary()
        this.totalSalary += gratutiy
    }
}
const devOne = new Developer('anil', 1, 1000, 500,200,100)
const devTwo = new Developer('sunil', 1, 2000, 600,200,700)
const hrOne = new Developer('ram', 1, 1200, 500,100,100)
const hrTwo = new Developer('jhon', 1, 2700, 600,200,900)
let emplpoyeeList = [devOne,devTwo,hrOne,hrTwo]
for(let i =0;i<emplpoyeeList.length;i++)
{
console.log(emplpoyeeList[i].totalSalary);
}
