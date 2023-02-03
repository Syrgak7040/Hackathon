import React, { useState } from "react";
import InputsNameAndEmail from "./NameAndEmail";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [email, setEmail] = useState("");

  function checkAdmin() {
    if (email === "admin@gmail.com") {
      <Link to="/create">
        <img
          src={
            "https://raw.githubusercontent.com/Syrgak7040/Hackathon/fbc782b216038b5d40048daad50f253eaa97cd76/src/components/svg/plus.svg"
          }
          alt="plus"
        />
      </Link>;
    }
  }

  return (
    <div>
      <div className="admin">
        <div className="adminSmall">
          <div className="headerLock">
            <img
              src={
                "https://raw.githubusercontent.com/Syrgak7040/Hackathon/fbc782b216038b5d40048daad50f253eaa97cd76/src/components/svg/lock.svg"
              }
              alt=""
            />
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
