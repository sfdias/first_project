import React from "react";
import TextInput from "./TextInput.js";
import Dropdown from "./Dropdown.js";
import Welcome from "./Welcome.js";
import Modal from "./Modal.js";
import TableNameAge from "./Table.js";
import Button from "./Button";
import "./styles.css";
import { FaRegTimesCircle, FaCheck } from "react-icons/fa";

class App extends React.Component {
  state = {
    name: { value: "", valid: false },
    age: "-",
    isShowingWelcome: true,
    isShowingModal: false,
    modalType: "save",
    db: [],
    isShowingTable: false,
    isShowingErrors: false,
    buttonType: ""
  };

  /**
   * function to change name and disapear welcome component.
   * the name is passed and then used to update the state
   */
  changeStateName = name => {
    this.setState({
      name,
      isShowingWelcome: false
    });
  };

  /**
   * function to change age and disapear welcome component.
   * the event is passed to be taken the age from it and then
   * update the state.
   */
  changeStateAge = event => {
    this.setState({
      age: event.target.value,
      isShowingWelcome: false
    });
  };

  /**
   * function to close the modal. Could be inside the render method.
   */
  closeModalHandler = () => {
    this.setState({
      isShowingModal: false
    });
  };

  /**
   * This function will define the behavior depending on modal type. if the modal type is 'save'
   * then it will change the state to show the modal and change the state of modalType to 'save'.
   * If the state is 'cancel', it will show the modal but the type of 'cancel'.
   */
  dependingOnModalType = type => {
    if (type === "save") {
      if (this.state.name.valid) {
        this.setState({
          isShowingModal: true,
          modalType: "save"
        });
      } else {
        this.setState({
          isShowingErrors: true,
          modalType: "save"
        });
      }
    } else {
      this.setState({
        isShowingModal: true,
        modalType: "cancel"
      });
    }
  };

  /**
   * Will set the state.db to a const named dados. Will push new info(name and age inserted) to dados.
   * Will change the property db of the state. Will run the method to close the modal.
   */
  saveDataOnState = type => {
    let db = [];
    let name = { value: "", valid: false };
    let age = "";
    let isShowingModal = false;
    let isShowingErrors = false;
    let isShowingTable = false;

    if (type === "save") {
      db = this.state.db;
      db.push({ name: this.state.name.value, age: this.state.age });
      isShowingTable = true;
    } else {
      db = this.state.db;
      debugger;
      isShowingTable = db.length > 0 ? true : false;
    }

    this.setState({
      db,
      name,
      age,
      isShowingTable,
      isShowingErrors,
      isShowingModal
    });
  };

  /**
   * Function to render all our app.
   */
  render() {
    const dataToPassToModal = {
      modalType: this.state.modalType,
      show: this.state.isShowingModal,
      name: this.state.name.value,
      age: this.state.age,
      close: this.closeModalHandler,
      onClick: () => this.saveDataOnState(this.state.modalType),
    };
    
    return (
      <div className="App">
        <div className="frame">
          <div>
            {this.state.isShowingWelcome ? (
              <Welcome dataFromParent={this.state.name.value} />
            ) : null}
            <br />
            <div className="rowC">
              <TextInput
                //providing obj name (includes value + valid)
                dataFromParent={this.state.name}
                //providing the function changeStateName which will change the name property
                toChangeName={this.changeStateName}
              />
              {!this.state.name.valid ? <FaRegTimesCircle /> : <FaCheck />}
            </div>
            <br />
            <Dropdown
              dataFromParent={this.state.age}
              toChangeAge={this.changeStateAge}
            />
            <div className="rowButton">
              <Button
                buttonType="cancelButton"
                modalType="cancel"
                onClick={this.dependingOnModalType}
              />
              <Button
                disabled={!this.state.name.valid}
                buttonType="saveButton"
                modalType="save"
                onClick={this.dependingOnModalType}
              />
            </div>
            <div className="columnT">
              <Modal
                dataToPassToModal = {dataToPassToModal}
                onClick={() => this.saveDataOnState(this.state.modalType)}
              />
              <div>
                {this.state.isShowingTable ? (
                  <TableNameAge
                    key="table-name"
                    dataFromParent={this.state.db}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


/* NOTAS:

1)
  <SaveButton onClick={this.dependingOnModalType} />
  <CancelButton onClick={this.dependingOnModalType} />     
2)              
  //providing isShowingErros property which is false by default
  showErrors={this.state.isShowingErrors}*/
