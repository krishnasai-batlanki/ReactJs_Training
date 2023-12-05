let var1 = 100
function outer()
{
    let var2 = 10
    function inner()
    {
        let var3 = 20;
        let res = var1+var2+var3
        console.log(res)
    }
    inner()
}
outer()