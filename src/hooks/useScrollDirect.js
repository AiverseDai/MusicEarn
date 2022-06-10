import { useState, useEffect } from "react";
export default function useScrolldirection() {
  const [scrollStatus, setScrollStatus] = useState({
    scrollDirection: null,
    scrollPos: 0,
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDocument);

    return () => window.removeEventListener("scroll", handleScrollDocument);
  }, []);

  function handleScrollDocument() {
    setScrollStatus((prev) => {
      // to get 'previous' value of state
      return {
        scrollDirection:
          document.body.getBoundingClientRect().top < prev.scrollPos
            ? "down"
            : "up",
        scrollPos: document.body.getBoundingClientRect().top,
      };
    });
  }
  return scrollStatus;
}
