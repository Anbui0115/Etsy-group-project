import React, { useState } from "react";
import { Modal } from "../../context/Modal";

import "./ReviewModal.css";
import MakeReviewForm from "./MakeReviewForm";
import ManageReviewForm from "./ManageReviewForm";


function ReviewModal({hasReview, review, purchaseId, item}) {
  const [showModal, setShowModal] = useState(false);
  // console.log(hasReview)
  // console.log(review)

  const form = hasReview ?
               <ManageReviewForm item={item} purchaseId={purchaseId} review={review} setShowModal={setShowModal} /> :
               <MakeReviewForm item={item} purchaseId={purchaseId} setShowModal={setShowModal} />
  const btntext = hasReview ? <>Manage Review</> : <>Make Review</>
  const css = hasReview ? "edit-review-modal erw" : "edit-review-modal erb"

  return (
    <>
      <button
        className={css}
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
