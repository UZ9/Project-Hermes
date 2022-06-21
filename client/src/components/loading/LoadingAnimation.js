import { useRef } from "react";
import { useState } from "react";

export default function LoadingAnimation(props) {

    const textRef = useRef({ text: "LOADING DATA", color: "#212529" });
    const loadingPolygon = useRef();
    const loadingDot = useRef();
  
    const [loadingClasses, setLoadingClasses] = useState("rotating-triangle")
    const [loadingCircleClasses, setLoadingCircleClasses] = useState("loader triangle")

    const errorMessage = (text) => {
        textRef.current = { text: text, color: "#ff3333" }

        setLoadingClasses("rotating-triangle rotating-triangle-error")
        setLoadingCircleClasses("loader triangle-error triangle ")
    }

    return (
        <>
            <>
                <div style={loadingCircleClasses.includes("triangle-error") ? { "--dottransform": window.getComputedStyle(loadingDot.current, ':after').getPropertyValue("transform") } : {}} className={loadingCircleClasses} ref={loadingDot}>
                    <svg viewBox="0 0 86 80">
                        <polygon style={loadingClasses.includes("rotating-triangle-error") ? { "strokeDashoffset": window.getComputedStyle(loadingPolygon.current, null).strokeDashoffset } : {}} ref={loadingPolygon} className={loadingClasses} points="43 8 79 72 7 72"></polygon>
                        {loadingClasses.includes("rotating-triangle-error") ? <polygon className="triangle-exclamation" points="43 30 43 48" /> : undefined}
                    </svg>
                </div>
                <h1 style={{ color: textRef.current.color }} className="logo logo-primary loading-text text-center justify-content-center">{textRef.current.text}</h1>
            </>
        </>
    )
}