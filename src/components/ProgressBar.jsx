import { useContext } from "react";
import { ProgressContext } from "../App";



const progressBar = () => {
    const { progress } = useContext(ProgressContext);
    return (
    <div style={{
        display: "flex",
        gap: "20px"
    }}>
        <div id="progress-bar-wrapper">
            <div id="progress-bar" style={{
                height: "100%",
                width: `${progress}%`,
                backgroundColor: "aqua"
            }}></div>
        </div> 
        <span style={{
            fontWeight: "800"
        }}>{ progress === 100 ? "Done" : progress + '%' }</span>
    </div>
    )
}

export default progressBar;