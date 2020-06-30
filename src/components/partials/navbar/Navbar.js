import React, { useContext } from "react";

import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand" style={{ background: '#EDEFF5'}}>
    {/* <nav className="navbar navbar-expand navbar-light bg-light"> */}
       <Link to="/" className="navbar-brand">Logo</Link>
       <h5 className="mx-auto">Client Request/Issue Submission</h5>
    </nav>
  );
}
