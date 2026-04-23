import React, { useState, useEffect } from "react";
import "./ScrollToTop.scss";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset > window.innerHeight;
      setIsVisible(scrolled);

      const footer = document.querySelector("footer");
      if (!footer) {
        setBottomOffset(0);
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (footerRect.top < windowHeight) {
        const overlap = windowHeight - footerRect.top;
        setBottomOffset(overlap);
      } else {
        setBottomOffset(0);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{ bottom: `calc(2rem + ${bottomOffset}px)` }}
    ></button>
  );
};

export default ScrollToTop;
