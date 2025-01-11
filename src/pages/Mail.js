import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


const Mail = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm("service_kmh8vgi", "template_ygc5r0s", form.current, "iKcFWFoRX8jKJ4EyB").then(
      result => {
        alert("성공적으로 이메일이 전송되었습니다.");
        form.current.reset();
      },
      error => {
        console.log(error.text);
        alert("이메일이 전송이 실패되었습니다.");
      },
    );
  };

  return (
    <div className="mail">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form--header">
          <h3 className="mail--title">새로운 메시지</h3>
          <button type="submit" className="btn__mail__submit">
            <i className="icon__top"></i>
            <span className="visuallyhidden">보내기</span>
          </button>
        </div>
        <ul className="form--list--group">
          <li className="form--item">
            <label for="to_name" className="form__label">받는 사람:</label>
            <input 
              type="text"
              id="to_name"
              name="to_name"
              className="form__input"
              value="didlshakdi@gmail.com"
              placeholder="받는 사람 이메일을 입력하세요."
              readonly
            />
          </li>
          <li className="form--item">
            <label for="from_name" className="form__label">보낸 사람:</label>
            <input 
              type="email" 
              name="from_name" 
              id="from_name" 
              className="form__input" 
              placeholder="ex)abcd@naver.com" 
              required 
            />
          </li>
          <li className="form--item">
            <label for="title" className="form__label">제목:</label>
            <input 
              type="text"
              id="title"
              name="title"
              className="form__input"
              placeholder="제목을 입력해주세요.(20자 이내)"
              maxLength={20}
            />
          </li>
          <li className="form--item">
            <label className="visuallyhidden">내용</label>
            <textarea name="message" className="form__textarea" placeholder="내용을 입력하세요." required></textarea>
          </li>
        </ul>
    </form>
    </div>
  );
};

export default Mail;