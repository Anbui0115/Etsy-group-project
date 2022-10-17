import React, { useState } from "react";
import { Modal } from "../../context/Modal";

import "./SignUpForm.css";
import SignUpForm from "./SignUpForm";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  console.log("SHOW MODAL NOW", showModal);
  return (
    <>
      <button
        className="signup-button-modal"
        onClick={
          () => setShowModal(true)
          //  console.log("SHOW MODAL NOW",showModal)
        }
      >
        Register
      </button >
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
