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
        <Modal.Header closeButton onClick={handler}></Modal.Header>

        <Modal.Body>
          <h2>
            You need <span className=" text-danger">186</span> more runs
          </h2>
          <h2 className=" text-center">to</h2>
          <h1 className=" m-5 text-center">
            Level <span className="text-success">95</span>
          </h1>
        </Modal.Body>

        <Modal.Footer>
          <div className="d-flex justify-content-center w-100">
            <Button variant="primary" className="ps-5 pe-5" onClick={handler}>
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Result;
