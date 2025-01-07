import React, { useState } from "react";

const slotItem = [
  { key: "1" , skilName: "HTML"},
];

function Skill(){

return(
  <div className="skill">
    <div className="slot--game--group">
      <ul>
        {slotItem.map((item) => (
            <li
              key={item.key}
              className="slot__item"
            >
              <span className="visuallyhidden">{slotItem.skillName}</span>
            </li>
        ))
        }
      </ul>
    </div>
    <div className="slot--text--group">
      <span></span>
    </div>
    <div className="list--group--bottom">
      <button type="button">돌리기</button>
    </div>
  </div>
)


}

export default Skill;