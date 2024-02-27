import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Result from "./Result";
import { NumericFormat } from "react-number-format";

const FormData = () => {
  const [formData, newFormData] = useState({
    currentXp: "",
    level: 1,
    xpGain: "",
  });

  const [result, setResult] = useState(false);

  function showResult() {
    setResult(!result);
  }
  const options = Array.from({ length: 20 }, (_, index) => (
    <option key={index + 80} value={index + 80}>
      {index + 80}
    </option>
  ));

  function handleButtonClick() {
    onButtonClick(formData);
  }

  function resetHandler() {
    newFormData({
      currentXp: "",
      level: 1,
      xpGain: "",
    });
  }

  function changeHandler(event) {
    event.target.name === "level" && event.target.blur(); // safari requirement

    newFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <>
      {!result ? (
        <div className="wrapper d-flex flex-column justify-content-start  align-items-center rounded-2">
          <h1 className="chrisey p-5" style={{ fontFamily: "diablo" }}>
            Diablo II XP Calculator
          </h1>
          <div className="form-container container-fluid d-flex justify-content-center">
            <Form className="">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="">Enter your level </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="level"
                  value={formData.level}
                  onChange={changeHandler}
                >
                  <option>Level</option>
                  {options}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter your current XP</Form.Label>
                <NumericFormat
                  className="form-control"
                  value={formData.currentXp}
                  name="currentXp"
                  allowLeadingZeros
                  thousandSeparator=","
                  onChange={changeHandler}
                  type="text"
                  placeholder="0"
                />

                <Form.Text className="text-muted">
                  Enter full number without separtor
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Enter XP gain per run</Form.Label>
                <NumericFormat
                  type="text"
                  name="xpGain"
                  value={formData.xpGain}
                  onChange={changeHandler}
                  placeholder="0"
                  allowLeadingZeros
                  thousandSeparator=","
                  className="form-control"
                />
                <Form.Text className="text-muted">
                  Enter full number without separtor
                </Form.Text>
              </Form.Group>

              <div className="text-center m-4">
                <Button
                  variant="primary"
                  type="button"
                  onClick={showResult}
                  style={{ fontFamily: "diablo" }}
                >
                  Submit
                </Button>

                <Button
                  variant="primary"
                  type="button"
                  onClick={resetHandler}
                  style={{ fontFamily: "diablo" }}
                  className="ms-2"
                >
                  Reset
                </Button>
              </div>
            </Form>
          </div>
        </div>
      ) : (
        <Result formData={formData} clickHandler={showResult} />
      )}
    </>
  );
};

export default FormData;
