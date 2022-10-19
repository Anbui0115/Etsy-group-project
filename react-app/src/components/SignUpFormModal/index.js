import React, { useState } from "react";
import { Modal } from "../../context/Modal";

import "./SignUpForm.css";
import SignUpForm from "./SignUpForm";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="signup-button-modal"
        onClick={
          () => setShowModal(true)
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
