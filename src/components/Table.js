import React, { Component } from "react";
import "./styles.css";

class TableNameAge extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {this.props.dataFromParent.map(dado => (
            <tr>
              <td>{dado.name}</td>
              <td>{dado.age}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default TableNameAge;
