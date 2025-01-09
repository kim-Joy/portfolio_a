import React, { useState, useEffect } from "react";

function Home() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [position, setPosition] = useState(0);
  const [isDragHidden, setDragHidden] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      let hours = now.getHours();
      let minutes = now.getMinutes();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      let weekdays = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
      let weekday = weekdays[now.getDay()];

      const formatTime = `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")}`;
      const formatDate = `${month}월 ${day}일 ${weekday}`;
      setTime(formatTime);
      setDate(formatDate);
    };

    updateDateTime(); // 초기화
    const intervalNow = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalNow);
  }, []);

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    setPosition(touch.clientY);
  };

  const handleTouchEnd = () => {
    if (position < 150) {
      setDragHidden(true);
    } else {
      setPosition(0);
    }
  };

  return (
    <div
      className={`home ${isDragHidden ? 'on' : ''}`}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="home--util">
        <p className="home--utill__date">{date}</p>
        <strong className="home--utill__time">{time}</strong>
      </div>
      <div className="home--weather">날씨</div>
      <div className="home--bottom--sliding--bar">
        <p className="sliding__txt">위로 쓸어올려서 잠금해제</p>
      </div>
    </div>
  );
}

export default Home;
