import { useEffect } from "react";
import { useState } from "react"

/**
 * Detects whether the current device is in mobile mode, used for responsive design
 */
export const useMobileDetect = () => {
    const isMobileResolution = () => window.innerWidth < 767.98;

    const [isMobile, setIsMobile] = useState(isMobileResolution())

    useEffect(() => {
        const handlePageResized = () => {
            setIsMobile(isMobileResolution);
        };

        // Load events
        window.addEventListener('resize', handlePageResized);
        window.addEventListener('orientationchange', handlePageResized);
        window.addEventListener('load', handlePageResized);
        window.addEventListener('reload', handlePageResized);

        // Unload events
        return () => {
            window.removeEventListener('resize', handlePageResized);
            window.removeEventListener('orientationchange', handlePageResized);
            window.removeEventListener('load', handlePageResized);
            window.removeEventListener('reload', handlePageResized);
        };
    }, []);

    return {
        isMobile
    }
}