import React from "react";
import "./errorPage.css"

export const ErrorPage = () => {
      return (
        <div>
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap" rel="stylesheet" />
          <div className="mainbox">
            <div className="err">4</div>
            <i className="far fa-question-circle fa-spin" />
            <div className="err2">4</div>
            <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <a href="/home"><h4>home</h4></a> and try from there.</p></div>
          </div>
        </div>
      );
  };
