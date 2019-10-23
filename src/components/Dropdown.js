import React from "react";
import Form from "react-bootstrap/Form";

function Dropdown (props) {
     
  return (
      <div id="block_container">
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Age:</Form.Label>
            <Form.Control
              as="select"
              value={props.dataFromParent}
              onChange={props.toChangeAge}
            >
              <option>
                Select your age
              </option>
              <option>30</option>
              <option>31</option>
              <option>32</option>
              <option>33</option>
              <option>34</option>
              <option>35</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }

export default Dropdown;
