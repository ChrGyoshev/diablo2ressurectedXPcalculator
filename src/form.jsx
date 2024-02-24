import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const FormData = ({ options, onButtonClick }) => {
  const [formData, newFormData] = useState({
    currentXp: "",
    level: 1,
    xpGain: "",
  });

  function handleButtonClick() {
    onButtonClick(formData);
  }

  function changeHandler(event) {
    newFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  return (
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
            <Form.Control
              type="number"
              name="currentXp"
              value={formData.currentXp}
              onChange={changeHandler}
            />
            <Form.Text className="text-muted">
              Enter full number without separtor
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Enter XP gain per run</Form.Label>
            <Form.Control
              type="number"
              name="xpGain"
              value={formData.xpGain}
              onChange={changeHandler}
            />
            <Form.Text className="text-muted">
              Enter full number without separtor
            </Form.Text>
          </Form.Group>

          <Button
            variant="primary"
            type="button"
            onClick={handleButtonClick}
            style={{ fontFamily: "diablo" }}
          >
            Submit
          </Button>
          <Button
            variant="primary"
            type="button"
            style={{ fontFamily: "diablo" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default FormData;
