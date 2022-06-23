import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import useStore from "../../stores/TeamDataStore";
import LoadingMessages from "./LoadingMessages";

export default function LoadingAnimation(props) {
    const loadingStatus = useStore(state => state.loadingStatus)

    const textRef = useRef({ text: "LOADING DATA", color: "#212529" });
    const loadingPolygon = useRef();
    const loadingDot = useRef();
  
    const [loadingClasses, setLoadingClasses] = useState("rotating-triangle")
    const [loadingCircleClasses, setLoadingCircleClasses] = useState("loader triangle")

    useEffect(() => {
        if (props.error) {
            errorMessage(props.error.text, props.error.subtext)
        }

        if (LoadingMessages[loadingStatus]) {
            const { title, subtitle } = LoadingMessages[loadingStatus];
            
            errorMessage(title, subtitle)
        }

        // if (loadingStatus === "InvalidSku") {
            
        //     errorMessage("Invalid SKU ID", "Enter a valid SKU ID on the Settings page.")
        // }

    }, [loadingStatus, props.error]) 

    const errorMessage = (text, subtext="") => {
        textRef.current = { text: text.toUpperCase(), subtext: subtext, color: "#ff3333" }

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
                <h3 className="subtext loading-subtext text-center justify-content-center">{textRef.current.subtext}</h3>
            </>
        </>
    )
}