import { useEffect, useRef } from "react";
import "./cursor.css";

const Cursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  let rx = 0, ry = 0;

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    let mx = 0, my = 0;

    const onMove = (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = (mx - 5) + "px";
  cursor.style.top = (my - 5) + "px";
};

   const animRing = () => {
  rx += (mx - rx) * 0.13;
  ry += (my - ry) * 0.13;
  ring.style.left = (rx - 19) + "px";
  ring.style.top = (ry - 19) + "px";
  requestAnimationFrame(animRing);
};
    const addGrow = () => {
      cursor.classList.add("grow");
      ring.classList.add("grow");
    };
    const removeGrow = () => {
      cursor.classList.remove("grow");
      ring.classList.remove("grow");
    };

    document.addEventListener("mousemove", onMove);
    animRing();

    const targets = document.querySelectorAll("a, button, .project-card, .skill-card, .tech-card");
    targets.forEach(el => {
      el.addEventListener("mouseenter", addGrow);
      el.addEventListener("mouseleave", removeGrow);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
};

export default Cursor;