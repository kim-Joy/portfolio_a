import React, { useState, useEffect } from "react";
import useDateTime  from "usestate/useDateTime";

function LockScreen() {
  const {time, date } = useDateTime ();

  const [startY, setStartY] = useState(null);
  const [position, setPosition] = useState(0);
  const [isDragHidden, setDragHidden] = useState(false);

  const handleTouchStart = (e) => {
    const touch = e.touches ? e.touches[0] : e;
    setStartY(touch.clientY);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches ? e.touches[0] : e;
    if (startY !== null) {
      setPosition(startY - touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    if (position > 100) {
      setDragHidden(true);
    }
    setStartY(null);
    setPosition(0);
  };

  return (
    <div
      className={`lockscreen ${isDragHidden ? "on" : ""}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
    >
      <div className="lockscreen--util">
        <p className="lockscreen--util__date">{date}</p>
        <strong className="lockscreen--util__time">{time}</strong>
      </div>
      <div className="lockscreen--weather">날씨</div>
      <div className="lockscreen--bottom--sliding--bar">
        <p className="sliding__txt">위로 쓸어올려서 잠금해제</p>
      </div>
      <div className="lockscreen--heartbeat">
        <div className="heartbeat__heart"></div>
      </div>
    </div>
  );
}

export default LockScreen;
