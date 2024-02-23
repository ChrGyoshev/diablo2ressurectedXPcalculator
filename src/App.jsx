import "./App.css";
import "./assets/fonts/diablo.ttf";
import player from "./datasheet";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Result from "./Modal";
import FormData from "./form";

function App() {
  const options = Array.from({ length: 99 }, (_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1}
    </option>
  ));

  const [result, setResult] = useState(false);

  const clickHandler = () => {
    setResult(!result);
    console.log("hi");
  };

  return (
    <>
      <div className="background d-flex justify-content-center align-content-center align-items-center">
        {!result ? (
          <FormData options= {options} onButtonClick={clickHandler} />
        ) : (
          <Result clickHandler={clickHandler} />
        )}
      </div>
    </>
  );
}

export default App;
