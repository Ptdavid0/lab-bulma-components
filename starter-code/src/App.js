import React, { Component } from "react";
import Navbar from "./navbar";
import FormField from "./formField";
import CoolButton from "./CoolButton";
import Singup from "./Signup";
import Message from "./Message";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <br />
        <CoolButton />
        <Singup />
        <Message title="Hello World" />
      </div>
    );
  }
}

export default App;
