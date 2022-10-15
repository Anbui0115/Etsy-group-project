import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";
// import "./LoginForm.css";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
console.log("SHOW MODAL NOW",showModal)
  return (
    <>
      <button className="login-button-modal" onClick={() =>setShowModal(true)
        //  console.log("SHOW MODAL NOW",showModal)
      } >
        Log Innnn
      </button>
      {showModal && (

        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
