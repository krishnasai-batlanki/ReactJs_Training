// interface WelcomePropType
// {
//     message:string;
//     changeMessage?: any
// }

type noArgsNoReturntype = (args:string) => void

// type WelcomePropType =
// {
//     message:string;
//     changeMessage?: any
// }


type WelcomePropType =
{
    message:string;
    changeMessage?: noArgsNoReturntype;
    changeName: noArgsNoReturntype;
}


// export function Welcome(args:any)
// {
    
//     const desgin =
//     (
//         <div>
//             <h1>
//                 {args.message}
//             </h1>
//             <img src={args.image} />
           
//         </div>
//     )
//     return desgin
// }
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
                        window.alert(typedMessage)
                        props.changeName(typedMessage)
                    }
                }/>
            </div>
           

        </div>
    )
}

//  {/* <button type="button" onClick={props.changeMessage}> click me to change</button>  */}
//             {/* <button type="button" onClick={
//                 (e) =>
//                 {
//                     props.changeMessage('It is changed!!!')
//                 }
//             }> click me to change</button> */}