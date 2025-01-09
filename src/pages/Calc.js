import React, { useState } from 'react';

const CALC__BTN__OPERATIONS = [ 
  { key: "1", className: "division operations", text: "/" },
  { key: "2", className: "multiplication operations", text: "x" },
  { key: "3", className: "subtraction operations", text: "-" },
  { key: "4", className: "addition operations", text: "+" },
  { key: "5", className: "total operations", text: "=" },
];

const CALC__BTN__NUM = [
  { key: "7", className: "num_7", text: "7" },
  { key: "8", className: "num_8", text: "8" },
  { key: "9", className: "num_9", text: "9" },
  { key: "4", className: "num_4", text: "4" },
  { key: "5", className: "num_5", text: "5" },
  { key: "6", className: "num_6", text: "6" },
  { key: "1", className: "num_1", text: "1" },
  { key: "2", className: "num_2", text: "2" },
  { key: "3", className: "num_3", text: "3" },
  { key: "calc", className: "calc", text: "계산기" },
  { key: "dot", className: "dot", text: "." },
  { key: "0", className: "num_0", text: "0" },
];

const CALC__BTN_FORMULA = [
  { key: "1", className: "ac formula", text: "AC" },
  { key: "2", className: "num formula", text: "+/-" },
  { key: "3", className: "percent formula", text: "%" },
];

function Calc() {
  
  return (
    <div className="Calc">
      <div className="calc--viewer">
        <input type="text" value="0" className="calc__input__value" readOnly />
      </div>
      <div className="calc--dashbard">
        <div className="calc__item operations">
          <ul className="calc__grid">
            {CALC__BTN__OPERATIONS.map((item) => (
              <li key={item.key}>
                <button
                  type="button"
                  className={`calc__btn ${item.className}`}
                >
                  <span>{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="calc__item num">
          <ul className="calc__grid">
            {CALC__BTN__NUM.map((item) => (
              <li key={item.key}>
                <button
                  type="button"
                  className={`calc__btn ${item.className}`}
                >
                  <span>{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="calc__item formula">
          <ul className="calc__grid">
            {CALC__BTN_FORMULA.map((item) => (
              <li key={item.key}>
                <button
                  type="button"
                  className={`calc__btn ${item.className}`}
                >
                  <span>{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Calc;
