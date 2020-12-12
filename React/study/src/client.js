import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import InnerFunc from "./components/InnerFunc";
import ImportComp from "./components/ImportComp"

const app = document.getElementById("app");

// ReactDOM.render(<Layout/>, app);
// ReactDOM.render(<InnerFunc/>, app);
ReactDOM.render(<ImportComp/>, app);

