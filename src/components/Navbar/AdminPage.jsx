import React, { useState } from "react";
import lock from "./../svg/lock.svg";
import InputsNameAndEmail from "./NameAndEmail";
import Navbar from "./Navbar";
import plus from "./../svg/plus.svg";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [email, setEmail] = useState("");

  function checkAdmin() {
    if (email === "admin@gmail.com") {
      <Link to="/create">
        <img src={plus} alt="plus" />
      </Link>;
    }
  }

  return (
    <div>
      <div className="admin">
        <div className="adminSmall">
          <div className="headerLock">
            <img src={lock} alt="" />
            <div>Sign in</div>
          </div>
          <div className="center">
            <InputsNameAndEmail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
