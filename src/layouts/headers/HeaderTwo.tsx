import { useState } from "react";
import UseSticky from "../../hooks/UseSticky";
import { Link } from "react-router-dom";
// import NiceSelect from "../../ui/NiceSelect";
import NavMenu from "./NavMenu";
import OffCanvas from "../../common/OffCanvas";

const HeaderTwo = () => {
//   const selectHandler = (_e: any) => { };
  const { sticky } = UseSticky()
  const [openCanvas, setOpenCanvas] = useState(false)

  return (
    <>
      <header className="header-section-2">
      <div className="container">
  <div className="header-top d-flex justify-content-between align-items-center">

    {/* LEFT LOGO */}
    <Link to="/" className="top-logo">
      <img src="assets/img/logo/jmce-logo.png" alt="img" style={{ width: "120px" }} />
    </Link>

    <div 
  className="college-info" 
  style={{ 
    lineHeight: "1.7",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px" // optional small spacing between lines
  }}
>
  <h5 style={{ margin: 0, fontSize: "30px", fontWeight: "600" }}>
    Jamal Mohamed College of Engineering
  </h5>
  
  <p style={{ margin: 0, fontSize: "22px" }}>
    Approved by AICTE and Affiliated to Anna University, Chennai
  </p>
</div>

  

    {/* RIGHT CONTENT */}
    <div className="d-flex align-items-center gap-3">

      {/* PHONE */}
      <div className="category-oneadjust d-flex align-items-center">
        <span>📞 +91 74183 44480</span>
      </div>

      {/* ADMIN */}
      {/* <div className="icon-items d-flex align-items-center">
        <i className="fas fa-user"></i>
        <h6 className="ms-2">
          <Link to="/sign-in">Admin</Link>
        </h6>
      </div> */}

      {/* SMALL BUTTON */}
      <div className="header-button">
        <Link 
          to="/register" 
          className="theme-btn yellow-btn"
          style={{ padding: "12px 14px", fontSize: "14px" }}
        >
          Apply Now
        </Link>
      </div>

      {/* MENU ICON */}
      <div className="header__hamburger d-xl-none ms-3">
        <div className="sidebar__toggle" onClick={() => setOpenCanvas(!openCanvas)}>
          <i className="fas fa-bars"></i>
        </div>
      </div>

      {/* SMALL RIGHT LOGO */}
      <Link to="/" className="top-logo">
        <img src="assets/img/own/cccode.svg" alt="img" style={{ width: "100px" }} />
      </Link>
    </div>

  </div>
</div>
            <div id="header-sticky" className={`header-2 ${sticky ? "sticky" : ""}`}>
                <div className="container">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <Link to="/" className="header-logo">
                        {/* <img src="assets/img/own/clglogo.svg" alt="img" style={{width:"200px"}} />   */}
                        {/* <img src="assets/img/logo/jmce-logo.png" alt="logo-img" style={{width:"120px"}} /> */}
                            </Link>
                            <div className="header-left">
                                <div className="mean__menu-wrapper">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                          <NavMenu /> 
                                        </nav>
                                    </div>
                                </div>
                                
                            </div>
                                {sticky && 
                                    (
                                    
                                        <Link to="/" className="top-logo">
                                            {/* <img src="assets/img/code.svg" alt="img" style={{ width: "120px" }} /> */}
                                            {/* <img src="assets/img/own/cccode.svg" alt="img" style={{width:"120px"}} /> */}
                                        </Link>
                                    )
                                }
                            <div className="header-right d-flex justify-content-end align-items-center">
                                {/* <div className="icon-items">
                                    <i className="fas fa-user"></i>
                                    <h6><Link to="/sign-in">Admin</Link></h6>
                                </div>
                                <div className="header-button">
                                    <Link to="/register" className="theme-btn yellow-btn">Enroll Now</Link>
                                </div> */}
                                
                                {/* <div className="header__hamburger d-xl-none my-auto">
                        <img src="assets/img/own/clglogo.svg" alt="img" style={{width:"200px"}} />  

                                    <div className="sidebar__toggle" onClick={ () => setOpenCanvas(!openCanvas)}>
                                        <i className="fas fa-bars"></i>
                                    </div>
                                </div> */}

                                        {/* <div className="header__hamburger d-xl-none d-flex align-items-center gap-3 my-auto">

                                        <img 
                                        src="assets/img/logo/jmce-logo.png" 
                                        alt="img" 
                                        style={{ width: "140px" }} 
                                        />
                                        <p>Jamal Mohamed College of Engineering</p>
                                            <img src="assets/img/own/cccode.svg" alt="img" style={{width:"120px"}} />

                                        <div 
                                        className="sidebar__toggle" 
                                        onClick={() => setOpenCanvas(!openCanvas)}
                                        style={{ fontSize: "22px", cursor: "pointer" }}
                                        >
                                        <i className="fas fa-bars"></i>
                                        </div>

                                        </div> */}
<div className="header__hamburger d-xl-none d-flex align-items-center justify-content-between gap-2 my-auto"
     style={{ width: "100%", padding: "10px 15px" }}>

  {/* LEFT LOGO */}
  <img 
    src="assets/img/logo/jmce-logo.png" 
    alt="img" 
    style={{ width: "70px"}}
  />

  {/* TEXT */}
  <p
  style={{
    fontWeight: "600",
    margin: 0,
    fontSize: "12px",
    textAlign: "center",
    flex: 1,
    lineHeight: "14px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }}
>
  <span>Jamal Mohamed College</span>
  <span>of</span>
  <span>Engineering</span>
</p>


  {/* CODE IMAGE */}
  <img 
    src="assets/img/own/cccode.svg" 
    alt="img" 
    style={{width:"70px"}}
  />

  {/* MENU ICON */}
  <div 
    className="sidebar__toggle"
    onClick={() => setOpenCanvas(!openCanvas)}
    style={{ fontSize: "26px", cursor: "pointer" }}
  >
    <i className="fas fa-bars"></i>
  </div>
</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <OffCanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />

    </>
  );
};

export default HeaderTwo;