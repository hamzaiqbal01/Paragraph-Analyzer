import React from "react";

export default function About() {
  return (
    <>
      <div className="cotainer-fluid mt-4">
        <div className="container contentContainer">
          <div className="heading col-lg-3 col-md-8 col-8 ">
            <h2 className="heading col-md-12 col-12 px-5 mx-auto rounded">
              About us
            </h2>
          </div>
          <div className="row col-md-12  col-12 ">
            <div className="textContainer  col-lg-6 px-4  mt-3 py-5">
              <div className="introductionPragraph ">
                <p className="mySelfHeadin">My, Myself & I</p>
                <span className="nameAndWelcomHeading">
                  Hello,
                  <br /> I'm <span className="nameHeading">Hamza Iqbal</span>
                  <br />
                  I'm a <span className="qouteLine">web developer</span>
                  <br />
                </span>
                HTML| CSS | SASS | Boostrap | JavaScript | React js | Graphic
                Designer
              </div>
            </div>
            <div className=" imgContainer   col-lg-6  py-5 ">
              <img src={require("../images/hamza.png")} alt="" />
              <div className="btnContainer d-flex mt-5 ">
                <a
                  href="https://www.fiverr.com/hamzaiqbal0?up_rollout=true"
                  target={"_blank"}
                >
                  <button className="aboutBtn aboutBtn2 px-5 mx-3 py-2">
                    Hire Me
                  </button>
                </a>
                <a href="https://github.com/hamzaiqbal01" target={"_blank"}>
                  {" "}
                  <button className="aboutBtn aboutBtn1 px-5 mx-3 py-2 ">
                    {" "}
                    My Work
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
