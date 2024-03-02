import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import playerLevel from "./datasheet";
import { useEffect, useState } from "react";

function Result({ clickHandler, formData }) {
  const handler = () => {
    clickHandler();
  };

  const [estimateXp, setEstimateXp] = useState(0);
  useEffect(() => {
    const currentExpirience = parseFloat(formData.currentXp.replace(/,/g, ""));
    const level = playerLevel[formData.level];
    console.log(level);
    const gain = parseFloat(formData.xpGain.replace(/,/g, ""));
    setEstimateXp((level - currentExpirience) / gain);
  }, []);

  return (
    <div className="modal show d-flex align-items-center justify-content-center">
      <Modal
        show={true} // Ensure the modal is shown
        onHide={handler} // Close modal when clicking outside
        className="w-90 opacity-100"
        centered
      >
        <Modal.Header closeButton onClick={handler}></Modal.Header>

        <Modal.Body>
          <h2 className="text-center">
            You need{" "}
            <span className=" text-danger">{Math.ceil(estimateXp)}</span> more
            runs to
          </h2>
          {/* <h2 className="text-center">to</h2> */}
          <h1 className="m-5 text-center">
            Level{" "}
            <span className="text-success">{Number(formData.level) + 1}</span>
          </h1>
        </Modal.Body>

        <Modal.Footer>
          <div className="d-flex justify-content-center w-100">
            <Button variant="primary" className="ps-5 pe-5" onClick={handler}>
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Result;
