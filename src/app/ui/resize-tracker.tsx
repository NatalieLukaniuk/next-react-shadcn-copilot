'use client';

import { useEffect, useState } from "react";

export default function ResizeTracker() {
    const [windowWidth, setWindowWidth] = useState(0);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full p-2 bg-gray-200 text-center">
      <p className="text-sm text-gray-600">Window width: {windowWidth}px</p>
    </div>
  );
}