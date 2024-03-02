import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const ErrorBox = ({ errorHandler }) => {
  return (
    <Modal
      show={true} // Ensure the modal is shown
      onHide={errorHandler} // Close modal when clicking outside
      className="w-90 opacity-100"
      centered
    >
      <Modal.Header closeButton onClick={errorHandler}>
        <p className="flex-grow-1 m-0 text">ERROR</p>
      </Modal.Header>

      <Modal.Body>
        <h1 className="m-5 text-center">
          <span className="text-danger">Something went wrong! Try Again!</span>
        </h1>
      </Modal.Body>

      <Modal.Footer>
        <div className="d-flex justify-content-center w-100">
          <Button
            variant="primary"
            className="ps-5 pe-5"
            onClick={errorHandler}
          >
            Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorBox;
