import React, { useState } from "react";
import Image from "assets/images/kakaobank.svg";

// 카카오뱅크 아이콘
const symbolon = <img src={Image} className="kakaobank__symbolon" alt="카카오뱅크" />;

// 숫자 목록
const NUM = [
  { key: "1" },
  { key: "2" },
  { key: "3" },
  { key: "4" },
  { key: "5" },
  { key: "6" },
  { key: "7" },
  { key: "8" },
  { key: "9" },
];

// 성공적인 패턴
const SUCCESS_PATTERN = ["1", "2", "3", "5", "9"];

function KakaoBank() {
  const [isPattern, setPattern] = useState([]);  // 선택된 패턴
  const [isErrorCount, setErrorCount] = useState(0);  // 실패 횟수
  const [isErrorText, setErrorText] = useState(false);  // 에러 상태

  // 숫자 드래그
  const HandleDrag = (key) => {
    // 이미 선택된 숫자는 추가하지 않도록 처리
    if (!isPattern.includes(key)) {
      setPattern((prevPattern) => [...prevPattern, key]);
      console.log(`선택된 번호: ${key}`);  // 선택된 번호를 콘솔에 출력
    }
  };

  // 패턴 제출
  const handleSubmit = () => {
    // isPattern 배열과 SUCCESS_PATTERN을 비교
    if (isPattern.join("") === SUCCESS_PATTERN.join("")) {
      console.log("패턴이 일치");
      setPattern([]); // 패턴 리셋
      setErrorCount(0); // 실패 횟수 리셋
      setErrorText(false);
    } else {
      console.log('false');
      setErrorCount((prev) => prev + 1); // 실패 횟수 증가
      setErrorText(true); // 에러 상태 true로 변경
      setPattern([]); // 패턴 리셋
    }
  };

  return (
    <div className="kakaobank">
      {symbolon}
      <div className="pattern--error-group">
        {isErrorText && (
          <>
            <p className="error__text">다시 한번 그리세요.</p>
            <span className="error__destructive">일치하지 않습니다.</span>
            <em className="pattern--error__num">({isErrorCount}/5)</em>
          </>
        )}
      </div>
      <div className="pattern--group">
        <ul className="pattern--num--list">
          {NUM.map((item) => (
            <li
              key={item.key}
              className="pattern__number"
              draggable
              onDrag={(e) => {
                e.preventDefault();  // 드래그 기본 동작 방지
                HandleDrag(item.key);  // 드래그된 숫자 패턴에 추가
              }}
            >
              <span className="visuallyhidden">{item.key}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="submit-button">
        <button onClick={handleSubmit}>제출</button>
      </div>
    </div>
  );
}

export default KakaoBank;
