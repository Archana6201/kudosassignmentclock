import React, { useState } from "react";

const Showtime = () => {
  let Currhour = new Date().getHours().toString();
  let Currminute = new Date().getMinutes().toString();
  let Currseconds = new Date().getSeconds().toString();


  const [hour, setHour] = useState(Currhour);
  const [minute, setMinute] = useState(Currminute);
  const [seconds, setSeconds] = useState(Currseconds);
 

  const UpdateTime = () => {
    var d = new Date();
     Currhour = d.getHours().toString();
     Currminute = d.getMinutes().toString();
     Currseconds = d.getSeconds().toString(); 
     if(Currhour > 12){
      Currhour = (d.getHours()-12).toString();
    }

    
     if(Currminute.length === 1){
        Currminute = "0" + Currminute;
    }
    if(Currseconds.length === 1){
        Currseconds = "0" + Currseconds;
    }
    if(Currhour.length === 1){
      Currhour = "0" + Currhour;
  }
     setHour(Currhour);
     setMinute(Currminute);
     setSeconds(Currseconds);
  }

  setInterval(UpdateTime, 1000);

  return (
    <div className={Currseconds%2 === 0 ? "background" : "main-container"}>
       <h1 className="heading">DIGITAL CLOCK</h1>
      <div className="div-container">
        <div className="clock-divs">{hour}</div>
        <div className="clock-divs">{minute}</div>
        <div className="clock-divs">{seconds}</div>
      </div>
    </div>
  );
};

export default Showtime;
