import React, { useState, Component } from "react";
import Draggable from "react-draggable";
import { TextField } from "@material-ui/core";

class EditableText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Note",
    };
  }
  changeColor = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <Draggable>
        <div style={{ position: "absolute", top: "600", left: "1000px" }}>
          <form noValidate>
            <TextField
              //classname="apply-font"
              type="text"
              id="note"
              variant="outlined"
              multiline
              rows={2}
              rowsMax={Infinity}
              placeholder="Type..."
              onChange={this.changeColor}
              inputProps={{ disableUnderline: true }}
            />
          </form>
        </div>
      </Draggable>
    );
  }
}
export default EditableText;
