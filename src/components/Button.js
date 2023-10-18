// This is a great opportunity to use props! Pass in props as an arg,
// then you can use them to differentiate the two buttons.  (Ex: changing the button text)
// Making a button component also means you can still share qualities between the two buttons

// Tips
// 1. Set up a return() statement with ONE parent element (could just be a <button> tag)
// 2. set onClick to a prop that can have different values in the counter component
// 3. MAKE THE BUTTONS PRETTYYY (and dont forget to export)

import react from "react";

function Button(props) {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

export {Button}