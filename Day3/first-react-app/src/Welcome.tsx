type noArgsNoReturntype = (args:string) => void
type WelcomePropType =
{
    message:string;
    changeMessage?: noArgsNoReturntype;
    changeName: noArgsNoReturntype;
}
export const Welcome = (props:WelcomePropType) =>
{
    return (
        <div>
            {
               
                    props.message? props.message : 'NA' 
            }
            <br />
            <div>
                <label htmlFor="textBox">Type new Message</label>
                <input type="text" value={props.message} onChange={
                    (e) =>
                    {
                        const typedMessage = e.target.value
                        //window.alert(typedMessage)
                        props.changeName(typedMessage)
                    }
                }/>
            </div>
           

        </div>
    )
}