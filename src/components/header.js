import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = () => {
  return (
    <Navbar color="info" light>
      <NavbarBrand href="/" className="ml-auto">
        Inspection Center
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;