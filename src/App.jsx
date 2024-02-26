import "./App.css";
import { useState } from "react";
import Result from "./Result";
import FormData from "./form";

function App() {
  return (
    <>
      <div className="background d-flex justify-content-center align-content-center align-items-center">
        {<FormData />}
      </div>
    </>
  );
}

export default App;
