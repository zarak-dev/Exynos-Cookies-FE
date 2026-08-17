import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Spin } from "antd";
import { FullScreenOverlay, LoadingText } from "./styles";

interface PageTransitionLoaderProps {
  children: React.ReactNode;
}

export const PageTransitionLoader: React.FC<PageTransitionLoaderProps> = ({
  children,
}) => {
  const [isSimulatingLoad, setIsSimulatingLoad] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    //Trigger the loading overlay when the route changes
    setIsSimulatingLoad(true);

    const transitionTimer = setTimeout(() => {
      setIsSimulatingLoad(false);
    }, 300);

    //Cleanup function to prevent memory leaks if the user navigates too fast
    return () => clearTimeout(transitionTimer);
  }, [location.pathname]); // dependency array ensures the effect runs only on path changes taught by jameel bhai

  return (
    <>
      {isSimulatingLoad && (
        <FullScreenOverlay>
          <Spin size="large" />
          <LoadingText>Loading...</LoadingText>
        </FullScreenOverlay>
      )}
      {children} {/* The actual page content renders behind the overlay */}
    </>
  );
};
