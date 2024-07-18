import { useContext } from "react";
import { ProgressContext } from "../App";

const Button = ({ text, stepBy }) => {
    const { progress, setProgress, steps } = useContext(ProgressContext);

    const handleButtonClick = () => {
        if (steps) {
            if (stepBy < 0) {
                setProgress(Math.max(progress + stepBy, 0));
            } else {
                setProgress(Math.min(progress + stepBy, 100));
            }
        }
    };

    return (
        <>
            <button onClick={handleButtonClick}>{text}</button>
        </>
    );
};

export default Button;
