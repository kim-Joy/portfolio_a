import { useState, useEffect } from "react";

function useDateTime() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [week, setWeek] = useState("");

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
    const formatMonth = `${month}`;
    const formatDay = `${day}`;
    const formatWeek = `${weekday}`;

    setTime(formatTime);
    setDate(formatDate);
    setMonth(formatMonth);
    setDay(formatDay);
    setWeek(formatWeek); 
  };

  // 처음 로드될 때 시간과 날짜를 업데이트
  useEffect(() => {
    updateDateTime(); 
    const interval = setInterval(updateDateTime, 1000); 
    return () => clearInterval(interval); 
  }, []); 

  return { time, date, month, day, week };
}


export default useDateTime;


