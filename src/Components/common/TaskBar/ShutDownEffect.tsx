import React, { useEffect, useRef, useState } from 'react';

const ShutdownEffect = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isShutdown, setIsShutdown] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(err => {
                console.error('Error playing video:', err);
            });
        }

        const timer = setTimeout(() => {
            setIsShutdown(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const handleVideoEnd = () => {
        setIsShutdown(true);
        setTimeout(() => {
            attemptClose()
        }, 1000);
    };

    const attemptClose = () => {
        // Try multiple close methods
        try {
            if (window) {
                window.close(); // Might work if opened by script
                window.close(); // Alternative method
                window.location.href = 'about:blank'; // Fallback to redirect
            }
        } catch (e) {
            console.error('Could not close window:', e);
        }
    };

    if (isShutdown) {
        return (
            <div className="fixed inset-0 bg-[#1a4dc7] z-[999] flex flex-col items-center justify-center">
                <div className="text-white text-xl mb-8">
                    Your system has shut down
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1a4dc7] z-[999]">
            <video
                ref={videoRef}
                src="/videos/Windows_shutdowns.mp4"
                className="w-full h-full object-cover"
                onEnded={handleVideoEnd}
                autoPlay
                muted
                playsInline
            />
        </div>
    );
};

export default ShutdownEffect;