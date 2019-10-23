import React from "react";
import "./styles.css";

const Modal = ({dataToPassToModal, onClick}) => {
  
  console.log(dataToPassToModal);

  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: dataToPassToModal.show ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: dataToPassToModal.show ? "1" : "0"
        }}
      >
        <div className="modal-body"></div>
        <p>
          {dataToPassToModal.modalType === "save"
            ? "Are you sure you want to save the following information?"
            : "ATTENTION! You are NOT saving the following information:"}
          <br />
          NAME: {dataToPassToModal.name}
          <br />
          AGE: {dataToPassToModal.age}
        </p>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={dataToPassToModal.close}>
            CLOSE
          </button>
          <button className="btn-continue" onClick={onClick}>
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
