import React, { FC } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo-itviet.png";
export const Header: FC = () => {
  return (
    <header className="">

      <nav className="container  navbar navbar-expand-lg navbar-dark bg-dark d-flex   justify-content-between">
        <Link to="/" style={{marginRight:50}}>
          <img src={logo} className="" alt="itviet" width={108} height={42} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse  d-flex   justify-content-between" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Việt Làm It 
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Công ty Hàng Đầu 
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Blog 
              </Link>
            </li>            
           
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Đăng Nhập
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Nhà Tuyển Dụng
              </Link>
            </li>
                   
           
          </ul>
        </div>

       
      </nav>
    </header>
  );
};
