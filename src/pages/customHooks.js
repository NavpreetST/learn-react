

import { useState } from "react";
import { useToggle } from "./toggleHook";


export const CustomHooks = () =>{
    const [isVisible, toggle] = useToggle(false)
    const [isVisible2, toggle2] = useToggle(false)

    return (<div className="hook-class">

        <button onClick={toggle}>
            {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <h1>hello</h1>}
        <button onClick={toggle2}>
            {isVisible2 ? "Hide" : "Show"}
        </button>
        {isVisible2 && <h1>hello</h1>}
    </div>

    )

}