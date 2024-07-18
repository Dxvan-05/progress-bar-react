import { useContext } from "react";
import { ProgressContext } from "../App";

const TextBox = () => {

    const { steps, setSteps } = useContext(ProgressContext); 

    return (
        <input type="number" value={steps} onChange={(e) => {setSteps(parseInt(e.target.value))}}/>
    )
}

export default TextBox;