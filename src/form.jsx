import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormData = ({ options, onButtonClick }) => {
  function handler() {
    onButtonClick();
  }
  return (
    <div className="wrapper d-flex flex-column justify-content-start  align-items-center rounded-2">
      <h1 className="chrisey p-5">Diablo II XP Calculator</h1>
      <div className="form-container container-fluid d-flex justify-content-center">
        <Form className="">
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="">Enter your level </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Level</option>
              {options}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter your current XP</Form.Label>
            <Form.Control type="number" placeholder="0000000000" />
            <Form.Text className="text-muted">
              Enter full number without separtor
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Enter XP gain per run</Form.Label>
            <Form.Control type="number" label="Check me out" />
            <Form.Text className="text-muted">
              Enter full number without separtor
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="button" onClick={handler}>
            Submit
          </Button>
          <Button variant="primary" type="button">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default FormData;
