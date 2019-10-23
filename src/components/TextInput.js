import React from "react";
import Form from "react-bootstrap/Form";

const maxCharact = 5;
const letters = /^[A-Za-z]+$/;

class TextInput extends React.Component {
  checkIfTextIsValid = event => {
    const value = event.target.value;

    /**
     * we pass the object name that has two properties to its Parent.
     * one is called value and it's the name itself, inserted by the user.
     * the other it's a boolean condition. it will be valid or not, which
     * is passed only if it's larger than 0 and less than maxCharact(5), 
     * if it's only letter and the first one is uppercase.
     */
    this.props.toChangeName({
      value: value,
      valid: value.length >= maxCharact && value.match(letters) && value[0] === value[0].toUpperCase()
    });
  };

  render() {
    return (
      <div id="block_container">
        <Form>
          <Form.Label>Name: </Form.Label>
          <Form.Control
            value={this.props.dataFromParent.value}
            type="text"
            placeholder="Text your name"
            onChange={event => this.checkIfTextIsValid(event)}
          />
        </Form>
      </div>
    );
  }
}

export default TextInput;

/*
NOTAS:
if valid=false AND if showErros=false (starting the app), js shows the last &&

{!this.props.dataFromParent.valid && this.props.showErrors
  && `Should have more than ${maxCharact} letters`
}

starting the app: valid is true and showErrors is false >>>> doesn't show because
it is suppose to show when !valid
inserting invalid name: valid is false and show
*/
