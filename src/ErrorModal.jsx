import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
const ErrorBox = ({ errorHandler, msg }) => {
  return (
    <Modal
      show={true} // Ensure the modal is shown
      onHide={errorHandler} // Close modal when clicking outside
      centered
    >
      <Modal.Body className="red">
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{msg}</p>
        </Alert>
      </Modal.Body>

      <Button
        variant="primary"
        className="mb-3 w-25 align-self-center"
        onClick={errorHandler}
      >
        Close
      </Button>
    </Modal>
  );
};

export default ErrorBox;
