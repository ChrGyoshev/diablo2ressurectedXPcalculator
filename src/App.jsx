import "./App.css";
import { useState } from "react";
import Result from "./Result";
import FormData from "./form";

function App() {
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(false);

  const clickHandler = (formData) => {
    setResult(!result);
    setFormData(formData);
  };

  return (
    <>
      <div className="background d-flex justify-content-center align-content-center align-items-center">
        {!result ? (
          <FormData onButtonClick={clickHandler} />
        ) : (
          <Result clickHandler={clickHandler} formData={formData} />
        )}
      </div>
    </>
  );
}

export default App;
