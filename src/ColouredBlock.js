import React from "react";
import ChangeColorButton from "./ChangeColorButton.js";

class ColoredBlock extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      color: "red"
    };
  }
  changeColor() {
    this.setState({
      color: this.state.color === "red" ? "blue" : "red"
    });
  }
  render() {
    return (
      <div
        style={{
          height: "200px",
          width: "200px",
          backgroundColor: this.state.color
        }}
      >
        <ChangeColorButton
          clickHandler={this.changeColor}
          currentColor={this.state.color}
        />
      </div>
    );
  }
}

export default ColoredBlock;
