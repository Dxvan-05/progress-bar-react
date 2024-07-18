import { useContext } from "react";
import { ProgressContext } from "../App";



const ProgressBar = () => {
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
                backgroundColor: `#AA${Math.floor((100 - progress) * 2.55).toString(16)}FF`
            }}></div>
        </div> 
        <span style={{
            fontWeight: "800"
        }}>{ progress === 100 ? "Done" : (progress % 1 != 0 ? progress.toFixed(1) : progress) + '%' }</span>
    </div>
    )
}

export default ProgressBar;