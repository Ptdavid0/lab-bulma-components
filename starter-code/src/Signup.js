import React from "react";
import Navbar from "./navbar";
import FormField from "./formField";
import CoolButton from "./CoolButton";

const Singup = () => {
  return (
    <div>
      <Navbar />

      <form action="" method="GET">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />

        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />

        <FormField
          label="Password"
          type="password"
          placeholder="Put you password"
        />

        <CoolButton />
      </form>
    </div>
  );
};

export default Singup;
