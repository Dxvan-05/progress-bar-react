import { useContext } from "react";
import { ProgressContext } from "../App";

const TextBox = () => {

    const { steps, setSteps } = useContext(ProgressContext); 

    return (
        <input type="number" min={0} max={100} value={steps} onChange={(e) => {setSteps(parseFloat(e.target.value))}}/>
    )
}

export default TextBox;