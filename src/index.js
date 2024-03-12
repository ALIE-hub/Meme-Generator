import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

// function Call(){
//     const [isGoingOut,setIsGoingOut]=React.useState(true)
//     function change(){
//         // setIsGoingOut(isGoingOut? false :true) anything will work
//         setIsGoingOut(prevState=>!prevState)
//     }
//     return(
//         <div>
//             <h1>Do I Feel like going out?</h1>
//             <h3 onClick={change}>{isGoingOut?"Yes":"No"}</h3>
//         </div>
//     )
// }

ReactDOM.render(<App/>,document.getElementById("root"))