// Code Keypad Component Here
 
function Keypad (){
    const consolelog = ()=>{console.log("Entering password...")}
    return (
        <div>
           {/* //input */}
           
           <input onChange={consolelog} type="password" />
        </div>
    )
}

export default Keypad;