import React, { useState, useEffect } from 'react';

import myPhoto  from "assets/images/my_photo.jpg";

const my_photo = <img src={myPhoto} className="receipt__thumb--image" alt="김조희 이미지" />

function My() {
  return (
    <div className="my">
      <div className="receipt--entrance">
      </div>
      <div className="receipt--pagper">
        <div className="receipt__header">
          <p className="receipt__job__title"><span className="receipt__job__web">web</span>publishing</p>
        </div>
        <div className="receipt__body">
          <div className="receipt__thumb--image"></div>
          <div className="receipt__thumb--info">
          <dl>
              <dt className="visuallyhidden">Name</dt>
              <dd>KIM JO HEE</dd>
            </dl>
            <dl>
              <dt>date of issue</dt>
              <dd>94/ 02/ 05</dd>
            </dl>
            <dl>
              <dt>date of issue</dt>
              <dd>94/ 02/ 05</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>

  )
} 


export default My;