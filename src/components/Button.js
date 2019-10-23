import React, { Component } from "react";
import { FaSave, FaRegTrashAlt } from "react-icons/fa";

function Button (props) {

    return (
      <div>
        <button
          disabled={props.disabled}
          className={`button button-${props.buttonType}`}
          onClick={() => props.onClick(props.modalType)}
        >
          {props.buttonType === "saveButton" ? (
            <div>
              <div>SAVE</div>
              <FaSave />
            </div>
          ) : (
            <div>
              <div>CANCEL</div>
              <FaRegTrashAlt />
            </div>
          )}
        </button>
      </div>
    );
  }


export default Button;
