
import React, { useRef } from "react";
import "./Orbit.css";

const OrbitFrame: React.FC = () => {
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);

  const parentRef = useRef<HTMLDivElement>(null);


  const handleParentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { top, left, width, height } = parentRef.current!.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    console.log(centerX, centerY)
    const x = event.clientX - centerX;
    const y = centerY - event.clientY;

    if (div1Ref.current && div2Ref.current && div3Ref.current) {
      div1Ref.current.style.transform = `translate(${x - 200}px, ${y}px)`;
      div2Ref.current.style.transform = `translate(${x}px, ${y - 200}px)`;
      div3Ref.current.style.transform = `translate(${x + 200}px, ${y}px)`;
    }
  };

  return (
    <div className="orbit-container" onClick={handleParentClick} ref={parentRef}>
      <div id="div1" className="orbit" ref={div1Ref} />
      <div id="div2" className="orbit" ref={div2Ref} />
      <div id="div3" className="orbit" ref={div3Ref} />
    </div>
  );
};

export default OrbitFrame;
