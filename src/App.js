import "./styles.css";
import { useState } from "react";

export default function App() {
  const [val, setVal] = useState("");
  const [res, setRes] = useState();
  const [isRes, setIsRes] = useState(false);

  const evaluate = (str) => {
    console.log(eval(str));
    setRes(eval(str));
    setIsRes(true);
  };

  const handleClick = (e) => {
    if (e.target.innerText === "C") {
      setVal("");
      setIsRes(false);
    } else if (e.target.innerText === "=") {
      //Calculator Implemantation
      if (val === "") {
        setRes("Error");
        setIsRes(true);
      } else {
        evaluate(val);
      }
    } else {
      setVal((preVal) => preVal + e.target.innerText);
    }
    
  };

  return (
    <div className="App">
      <h1 className="heading">React Calculator</h1>
      <input type="text" value={val} />
      {isRes && <div className="result-div">{res}</div>}
      <div className="keypad">
        <div className="row">
          <button type="button" className="btn" onClick={handleClick}>
            {" "}
            7{" "}
          </button>
          <button className="btn" onClick={handleClick}>
            {" "}
            8{" "}
          </button>
          <button className="btn" onClick={handleClick}>
            {" "}
            9{" "}
          </button>
          <button className="btn" onClick={handleClick}>
            {" "}
            +{" "}
          </button>
        </div>

        <div className="row">
          <button className="btn" onClick={handleClick}>
            {" "}
            4{" "}
          </button>
          <button className="btn" onClick={handleClick}>
            {" "}
            5{" "}
          </button>
          <button className="btn" onClick={handleClick}>
            {" "}
            6{" "}
          </button>
          <button className="btn" onClick={handleClick}>
            {" "}
            -{" "}
          </button>
        </div>

        <div className="row">
          <button className="btn" onClick={handleClick}>
            {" "}
            1{" "}
          </button>
          <button className="btn" onClick={handleClick}>
            {" "}
            2{" "}
          </button>
          <button className="btn" onClick={handleClick}>
            {" "}
            3{" "}
          </button>
          <button className="btn" onClick={handleClick}>
            {" "}
            *{" "}
          </button>
        </div>

        <div className="row">
          <button className="btn" onClick={handleClick}>
            {" "}
            C{" "}
          </button>
          <button className="btn" onClick={handleClick}>
            {" "}
            0{" "}
          </button>
          <button className="btn" onClick={handleClick}>
            {" "}
            ={" "}
          </button>
          <button className="btn" onClick={handleClick}>
            {" "}
            /{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
