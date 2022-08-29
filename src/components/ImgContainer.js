import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function ImgContainer(prop) {
  let newText;
  // const lowerCaseBtn = document.querySelector(".lowerCaseBtn");
  // Onchange Funtion
  const handleOnchange = (event) => {
    console.log("on change event call");
    setText(event.target.value);
  };
  //Upper case
  const handleUpperCase = () => {
    console.log("Upper case event call");
    newText = text.toUpperCase();
    setText(newText);
  };
  // Lower case
  const handleLowerCase = () => {
    newText = text.toLowerCase();
    setText(newText);
  };
  // copy text
  const handleCopytext = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  // Read Text
  const handleReadText = () => {
    newText = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(newText);
  };

  //Clear Btn
  const handleClearBtn = () => {
    setText("");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container col-md-12  inputContainer ">
        <div className="row col-md-12 col-12 mb-5  ">
          <div className="heading  mt-4">
            <h2 className="heading col-md-6 col-11 mx-auto rounded">
              Convert Your Paragraph
            </h2>
          </div>
          <div className="txtContainer mt-5 col-md-7 me-5">
            <div className="row ">
              <div className="form-group">
                <textarea
                  className="form-control textarea p-4"
                  id="myBox"
                  rows="14"
                  placeholder="Enter the Paragraph Here..............✍"
                  value={text}
                  onChange={handleOnchange}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Btn group */}

          <div className="btnContainer  mt-5 col-md-4 ">
            <div className="row">
              <button
                className="btn-converter btn1 col-md-11 col-7 mx-auto m-3"
                onClick={handleUpperCase}
              >
                To Uppercase ↗
              </button>
              <button
                className="btn-converter btn2 col-md-5 col-7 mx-auto m-3 "
                onClick={handleLowerCase}
              >
                To Lowercase ↙
              </button>
              <button
                className="btn-converter btn3 col-md-5 col-7 mx-auto m-3"
                onClick={handleCopytext}
              >
                Copy Text ©
              </button>
              <button
                className="btn-converter btn3 col-md-5 col-7 mx-auto m-3"
                onClick={handleReadText}
              >
                Read Text 🔊
              </button>
              <button
                className="btn-converter btn4 col-md-5 col-7 mx-auto m-3"
                onClick={handleClearBtn}
              >
                Clear Text 🧹
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
