import React from "react";

export default class InnerFunc extends React.Component {
  render() {
    return(
        <h1> It's {((num) => { return 1 + num ;})(3)}</h1>
    );
  }
}
