import React, { useRef } from "react";
import "./Orbit.css";

const OrbitFrame: React.FC = () => {
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="orbit-container">
      <div id="div1" className="orbit" ref={div1Ref} />
      <div id="div2" className="orbit" ref={div2Ref} />
      <div id="div3" className="orbit" ref={div3Ref} />
    </div>
  );
};

export default OrbitFrame;
