/** @format */
import { useState } from "react";
import { Link } from "react-router-dom";
import { logoImg } from "../../../assest/index";
import { AlertModal } from "../../../components/Modals/Modals";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AlertModal
        show={open}
        onHide={() => setOpen(false)}
        title={"Register Now To Consult a Counsellor"}
      />
      <div className="college-navbar-section-2">
        <div className="college-nav">
          <Link to={"/"}>
            <img src={logoImg} alt="" className="logo" />
          </Link>

          <div className="search-box">
            <input
              type="search"
              placeholder="Search for colleges, exams, Q & A, Articles..."
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <button className="info" onClick={() => setOpen(true)}>
            <i className="fa-regular fa-circle-question"></i>
            Need Counselling
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
