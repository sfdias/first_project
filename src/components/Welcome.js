import React from "react";
import { FaGrinAlt } from "react-icons/fa";

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <h1>
          Be Welcome! <FaGrinAlt />
        </h1>
        <h3>Submit your name and age to register.</h3>
      </div>
    );
  }
}

export default Welcome;
