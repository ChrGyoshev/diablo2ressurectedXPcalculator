import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import player from "./datasheet";

function Result({ clickHandler, formData }) {
  const handler = () => {
    clickHandler();
  };
  return (
    <div
      className="modal show d-flex align-items-center justify-content-center"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog className="w-90">
        <Modal.Header closeButton onClick={handler}>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
          <p>{formData.level}</p>
          <p>{player[formData.level]}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handler}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Result;
