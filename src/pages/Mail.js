import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Header from 'components/Header';

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
    <div className="Mail">
      <Header />
      <form>
        <input 
          type="text"
          name="ask_title"
          placeholder="제목을 입력해주세요.(20자 이내)"
          maxLength={20}
          required
        />
        <input type="email" name="user_email" placeholder="ex)abcd@naver.com" required />
        </form>

        <button type="submit" value="문의하기">문의</button>
      </div>
  );
};

export default Mail;