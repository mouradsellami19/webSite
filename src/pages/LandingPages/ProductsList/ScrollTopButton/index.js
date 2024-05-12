import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if user scrolled down enough to show the button
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <IconButton
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
            backgroundColor: "rgba(163, 121, 19, 1)",
          }}
        >
          <KeyboardArrowUp />
        </IconButton>
      )}
    </>
  );
};

export default ScrollTopButton;
