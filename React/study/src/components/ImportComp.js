import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class ImportComp extends React.Component {
  constructor() {
    super();
    this.state = { title: "Welcome"};
  }
  render() {
    setTimeout(
      () => { this.setState({title: "Welcom Sample state!!"});},
      2000
    );
    let components = [
        <Header title={this.state.title}/>,
        <Header title="Props Translation!! sample"/>,
        <Footer/>
    ];
    return(
        <div>
          {components}
        </div>
    );
  }
}
