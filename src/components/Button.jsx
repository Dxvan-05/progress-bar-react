import { useContext } from "react";
import { ProgressContext } from "../App";

const Button = (props) => {
    const { progress, setProgress } = useContext(ProgressContext);

    const handleButtonClick = () => {
        if(props.stepBy < 0) {
            setProgress(Math.max(progress + props.stepBy, 0));
        }
        else {
            setProgress(Math.min(progress + props.stepBy, 100));
        }
    }
    return (
        <>
            <button onClick={handleButtonClick}>{props.text}</button>
        </>
    );
}

export default Button;