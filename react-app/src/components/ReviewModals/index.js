import React, { useState } from "react";
import { Modal } from "../../context/Modal";

import "./ReviewModal.css";
import MakeReviewForm from "./MakeReviewForm";

function ReviewModal({hasReview, review, item}) {
  const [showModal, setShowModal] = useState(false);
  // console.log(hasReview)
  // console.log(review)

  const form = hasReview ? <>has review</> : <MakeReviewForm item={item} />
  const btntext = hasReview ? <>Manage Review</> : <>Make Review</>

  return (
    <>
      <button
        className="edit-review-modal"
        onClick={
          () => setShowModal(true)
          //  console.log("SHOW MODAL NOW",showModal)
        }
      >
        {btntext}
      </button >
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {form}
        </Modal>
      )}
    </>
  );

}

export default ReviewModal;
