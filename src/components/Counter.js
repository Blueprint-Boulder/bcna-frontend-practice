// Use this component to group all pieces of the counter together
// You may need: 
//     - A number to represent the pieces of meat (update with state)
//     - Two buttons to add and subtract from the number
//     - Pizzazzzzzzzz 

// Here's some steps to guide you
// 1. Set up a return() statement with ONE parent element
// 2. Set up a number with the value of a state variable you create
//         hint: const [varName, setVarName] = useState(initialValue)
//         other hint: useState() is used inside a function but NOT inside the return
// 3. Set up and export the button components then import them here 
// 4. Use tailwind for layout and styling!
// 5. Export your counter and import to the main app!

import react, { useState } from "react";
import { Button } from "./Button";


function Counter() {

    const [count, setCount] = useState(0)

    return (
        <>
            <p>{count}</p>
            <Button handleClick={() => setCount(count - 1)} text="Subtract"/>
            <Button handleClick={() => setCount(count + 1)} text="Add"/>
        </>
    )
}

export {Counter}
