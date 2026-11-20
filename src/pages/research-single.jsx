
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactStrip from "../components/ContactStrip";

function Research() {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const researchItems = [
    {
      id: 1,
      image: "assets/img/research/800.494/1.jpg",
      title: "Rehabilitation Center",
      department: "Cardiology, Pharmacy",
      delay: "0.1",
    },
    {
      id: 2,
      image: "assets/img/research/800.494/2.jpg",
      title: "Rehabilitation Center",
      department: "Cardiology, Pharmacy",
      delay: "0.2",
    },
    {
      id: 3,
      image: "assets/img/research/800.494/7.jpg",
      title: "Dentures / Partial Dentures",
      department: "Oncology, Pharmacy",
      delay: "0.3",
    },
    {
      id: 4,
      image: "assets/img/research/800.494/4.jpg",
      title: "Oral Cancer Screening",
      department: "Oncology, Cardiology",
      delay: "0.1",
    },
    {
      id: 5,
      image: "assets/img/research/800.494/5.jpg",
      title: "Women's Health Research",
      department: "Division of women health",
      delay: "0.2",
    },
    {
      id: 6,
      image: "assets/img/research/800.494/6.jpg",
      title: "Skin Disease Research Center",
      department: "Dermatology",
      delay: "0.3",
    },
    {
      id: 7,
      image: "assets/img/research/800.494/7.jpg",
      title: "Fitness Guidance to Patient",
      department: "Cardiology, Oncology",
      delay: "0.1",
    },
    {
      id: 8,
      image: "assets/img/research/800.494/8.jpg",
      title: "Diagnostic Imaging",
      department: "Orthopedic, Pharmacy",
      delay: "0.2",
    },
    {
      id: 9,
      image: "assets/img/research/800.494/9.jpg",
      title: "Rehabilitation Center",
      department: "Cardiology, Oncology",
      delay: "0.3",
    },
  ];

  const componentLinks = [
    ["Accordion", "/components/accordion"],
    ["Alerts", "/components/alerts"],
    ["Background", "/components/background"],
    ["Badges", "/components/badges"],
    ["Breadcrumb", "/components/breadcrumb"],
    ["Buttons", "/components/buttons"],
    ["Cards", "/components/cards"],
    ["Carousel", "/components/carousel"],
    ["Collapse", "/components/collapse"],
    ["Countup", "/components/countup"],
    ["Dropdowns", "/components/dropdowns"],
    ["Forms", "/components/forms"],
    ["Google map", "/components/google-map"],
    ["Modals", "/components/modals"],
    ["Navbar", "/components/navbar"],
    ["Pagination", "/components/pagination"],
    ["Progress", "/components/progress"],
    ["Tables", "/components/tables"],
    ["Tabs", "/components/tabs"],
    ["Tooltips", "/components/tooltips"],
  ];

  const utilityLinks = [
    ["Borders", "/utilities/borders"],
    ["Clearfix", "/utilities/clearfix"],
    ["Close icon", "/utilities/close-icon"],
    ["Colors", "/utilities/colors"],
    ["Display", "/utilities/display"],
    ["Embed", "/utilities/embed"],
    ["Flex", "/utilities/flex"],
    ["Figures", "/utilities/figures"],
    ["Grid", "/utilities/grid"],
    ["Sizing", "/utilities/sizing"],
    ["Spacing", "/utilities/spacing"],
    ["Typography", "/utilities/typography"],
  ];

  const documentationLinks = [
    ["Getting started", "/documentation/getting-started"],
    ["File structure", "/documentation/file-structure"],
    ["Customization", "/documentation/customization"],
    ["Gulp", "/documentation/gulp"],
    ["RTL", "/documentation/RTL"],
    ["Plugins", "/documentation/plugins"],
    ["Changelog", "/changelog"],
  ];

  const pageLinks = [
    ["About", "/about"],
    ["Blog", "/blog"],
    ["Blog Detail", "/blog-single"],
    ["Researches", "/research"],
    ["Research Detail", "/research-single"],
    ["Contact", "/contact"],
    ["Starter", "/starter"],
  ];

  const homeLinks = [
    ["Header Static", "/index-static"],
    ["Header Slider", "/"],
    ["Youtube Background", "/index-youtube"],
    ["Self Hosted Video", "/index-selfhosted"],
    ["RTL", "/index-rtl"],
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December",
  ];

  const years = Array.from(
    { length: 101 },
    (_, i) => 2019 - i
  );

  const renderLinks = (links) =>
    links.map(([label, path]) => (
      <Link className="dropdown-item" to={path} key={path}>
        {label}
      </Link>
    ));

  return (
    <main className="main" id="top">

      {/* Back to Top */}
      <a
        className="bottom-to-top rounded-soft"
        href="#top"
        data-fancyscroll
      >
        <span className="fas fa-angle-up lg" />
      </a>

      {/* Top Navigation */}
      <nav className="navbar navbar-expand navbar-light bg-light sticky-top font-weight-semi-bold fs--1 text-base shadow-sm">
        <div className="container">

          <ul className="navbar-nav align-items-center">
            <li className="nav-item dropdown">
              <a
                className="btn btn-light btn-sm dropdown-toggle mr-2"
                id="languageDropdown"
                href="#!"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="/assets/img/illustrations/united-states.svg"
                  width="20"
                  alt="English"
                />
              </a>

              <div
                className="dropdown-menu"
                aria-labelledby="languageDropdown"
              >
                <a className="dropdown-item" href="#!">
                  <img
                    src="/assets/img/illustrations/united-states.svg"
                    width="20"
                    alt=""
                  />{" "}
                  EN
                </a>

                <a className="dropdown-item" href="#!">
                  <img
                    src="/assets/img/illustrations/germany.svg"
                    width="20"
                    alt=""
                  />{" "}
                  DE
                </a>

                <a className="dropdown-item" href="#!">
                  <img
                    src="/assets/img/illustrations/saudi-arabia.svg"
                    width="20"
                    alt=""
                  />{" "}
                  AR
                </a>
              </div>
            </li>

            <li className="nav-item">
              <form
                className="input-iconic"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="input-icon">
                  <button type="submit">
                    <span className="fas fa-search text-300" />
                  </button>
                </div>

                <input
                  className="form-control form-control-sm"
                  type="search"
                  placeholder="Search..."
                />
              </form>
            </li>
          </ul>

          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a
                className="btn btn-outline-danger btn-sm mx-2"
                href="#!"
              >
                <span className="d-none d-md-inline">Find a </span>
                Doctor
              </a>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-primary btn-sm"
                type="button"
                onClick={() => setShowModal(true)}
              >
                <span className="d-none d-md-inline">Request </span>
                Appointment
              </button>
            </li>
          </ul>

        </div>
      </nav>

      {/* Hospital Information Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-200 navbar-split py-3">
        <div className="container">

          <Link
            className="navbar-brand d-flex align-items-center z-index-1"
            to="/"
          >
            <img
              src="/assets/img/logo.png"
              alt="Medicare"
              height="30"
            />
          </Link>

          <div className="navbar-nav text-base d-none d-lg-flex">

            <div className="nav-item">
              <div className="media border-right pr-3 mr-3">
                <span className="fas fa-map-marker-alt fs-2 text-primary" />

                <div className="media-body ml-2">
                  <h5 className="fs-0 mb-1">Address</h5>
                  <p className="fs--1 mb-0">
                    5525 W Slauson Ave,
                    <br />
                    LA, CA 90056, USA
                  </p>
                </div>
              </div>
            </div>

            <div className="nav-item">
              <div className="media">
                <span className="fas fa-headset fs-2 text-primary" />

                <div className="media-body ml-2">
                  <h5 className="fs-0 mb-1">
                    Phone Appointment
                  </h5>

                  <ul className="nav flex-column fs--1">
                    <li className="nav-item">
                      <a href="tel:5555551234">
                        (555) 555-1234
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="tel:5555555678">
                        (555) 555-5678
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <button
            className="navbar-toggler ml-4 z-index-1"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

        </div>
      </nav>

      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary font-weight-semi-bold py-0 fs--1">
        <div className="container">

          <div
            className={`collapse navbar-collapse ${
              menuOpen ? "show" : ""
            }`}
            id="navbarStandard"
          >
            <ul className="navbar-nav">

              {/* Home Dropdown */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-toggle="dropdown"
                >
                  Home
                </a>

                <div className="dropdown-menu">
                  {renderLinks(homeLinks)}
                </div>
              </li>

              {/* Pages Dropdown */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-toggle="dropdown"
                >
                  Pages
                </a>

                <div className="dropdown-menu">
                  {renderLinks(pageLinks)}
                </div>
              </li>

              {/* Components Dropdown */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-toggle="dropdown"
                >
                  Components
                </a>

                <div className="dropdown-menu dropdown-menu-card">
                  <div className="card navbar-dropdown-col-4 border-0">
                    <div className="card-body">
                      <div className="row">
                        {componentLinks.map(([label, path]) => (
                          <div className="col-6 col-sm-4" key={path}>
                            <Link
                              className="nav-link py-1 text-700 font-weight-medium"
                              to={path}
                            >
                              {label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Utilities Dropdown */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-toggle="dropdown"
                >
                  Utilities
                </a>

                <div className="dropdown-menu">
                  {renderLinks(utilityLinks)}
                </div>
              </li>

              {/* Documentation Dropdown */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-toggle="dropdown"
                >
                  Documentation
                </a>

                <div className="dropdown-menu">
                  {renderLinks(documentationLinks)}
                </div>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Research Hero Section */}
      <section className="text-primary py-6">
        <div
          className="bg-holder overlay overlay-white-gradient"
          style={{
            backgroundImage:
              "url('assets/img/research/800.494/1.jpg')",
          }}
        />

        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className="overflow-hidden">

                <h3 data-zanim-xs='{"from":{"x":-400},"to":{"x":0}}'>
                  Our Project for Research
                </h3>

                <p
                  className="font-weight-bold mb-0"
                  data-zanim-xs='{"delay":0.1,"from":{"x":-400},"to":{"x":0}}'
                >
                  Collaborative and Innovative Environment for Our Researchers
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Cards */}
     {/* Research Cards */}
<section className="py-5">
  <div className="container">
    <div className="row">

      {researchItems.map((item) => (
        <div
          className="col-lg-4 col-md-6 mb-4"
          key={item.id}
        >
          <div className="card h-100 hvr-shadow">

            <img
              className="card-img-top"
              src={item.image}
              alt={item.title}
              style={{
                height: "230px",
                objectFit: "cover",
              }}
            />

            <div className="card-body">
              <h5>
                <Link
                  className="text-decoration-none"
                  to="/research-single"
                >
                  {item.title}
                </Link>
              </h5>

              <p className="mb-0">
                {item.department}
              </p>
            </div>

          </div>
        </div>
      ))}

    </div>
  </div>
</section>

    

                  
           
             <ContactStrip/>
      {/* Footer Information */}
      <section>
        <div className="container">
          <div className="row">

            <div className="col">
              <Link className="d-block" to="/">
                <img
                  src="assets/img/logo.png"
                  alt="Medicare"
                  height="40"
                />
              </Link>

              <h5 className="text-uppercase border-bottom mt-4 pb-2 mb-3 d-inline-block">
                Brigham and Women's Hospital
              </h5>

              <p className="text-uppercase mb-1">
                75 Francis Street, Boston MA 02115
              </p>

              <p className="mb-1">
                General information: <a href="tel:6717325500">671-732-5500</a>
              </p>

              <p className="mb-1">
                New Patients: <a href="tel:8002949999">800-294-9999</a>
              </p>
            </div>

            <div className="col-xl-8 mt-4 mt-xl-0">
              <div className="row">

                <div className="col-lg-3">
                  <h5 className="fs-0 text-uppercase border-bottom pb-2 mb-3">
                    Centers
                  </h5>

                  <div className="nav flex-column">
                    {[
                      "Cancer Center",
                      "Heart & Vascular Center",
                      "The Lung Center",
                      "Neurosciences Center",
                      "Orthopaedic & Arthritis Center",
                      "Primary Care Center",
                      "Women's Health Center",
                    ].map((item) => (
                      <a className="text-600 py-1" href="#!" key={item}>
                        {item}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="col-lg-6 mt-4 mt-lg-0">
                  <h5 className="fs-0 text-uppercase border-bottom pb-2 mb-3">
                    Clinical Departments
                  </h5>

                  <div className="row no-gutters">

                    <div className="col">
                      <div className="nav flex-column">
                        {[
                          "Anesthesiology",
                          "Dermatology",
                          "Emergency Medicine",
                          "Medicine",
                          "Neurology",
                        ].map((item) => (
                          <a className="text-600 py-1" href="#!" key={item}>
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="col">
                      <div className="nav flex-column">
                        {[
                          "Neurosurgery",
                          "Orthopaedic Surgery",
                          "Obstetrics and Gynecology",
                        ].map((item) => (
                          <a className="text-600 py-1" href="#!" key={item}>
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                <div className="col-lg-3 mt-4 mt-lg-0">
                  <h5 className="fs-0 text-uppercase border-bottom pb-2 mb-3">
                    Departments
                  </h5>

                  <div className="nav flex-column">
                    {[
                      "Anesthesiology",
                      "Dermatology",
                      "Emergency Medicine",
                      "Medicine",
                      "Neurology",
                      "Neurosurgery",
                      "Orthopaedic Surgery",
                      "Obstetrics and Gynecology",
                    ].map((item, index) => (
                      <a
                        className="text-600 py-1"
                        href="#!"
                        key={`${item}-${index}`}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="bg-dark py-3">
        <div className="container">
          <div className="row flex-center">

            <div className="col text-center text-md-left">
              <p className="mb-0">
                Thank you for creating with medicare
                <br className="d-sm-none" />
                <span className="d-none d-sm-inline-block"> | </span>
                2026 &copy;{" "}
                <a
                  className="text-700"
                  href="https://themewagon.com/"
                >
                  ThemeWagon
                </a>
              </p>
            </div>

            <div className="d-none d-md-block col-md-auto">
              <p className="mb-0">v1.1.0</p>
            </div>

          </div>
        </div>
      </footer>

      {/* Appointment Modal */}
      {showModal && (
        <div
          className="modal fade show bd-example-modal-lg"
          style={{ display: "block" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalLabel"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">
                  Make Appointment
                </h5>

                <button
                  className="close"
                  type="button"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="modal-body p-4">
                <form
                  className="zform"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Appointment form submitted!");
                    setShowModal(false);
                  }}
                >

                  <div className="form-row">

                    <div className="form-group col-md-6">
                      <label className="font-weight-bold" htmlFor="inputName">
                        Patient name
                      </label>

                      <input
                        className="form-control font-italic"
                        id="inputName"
                        type="text"
                        placeholder="Enter full name"
                        name="name"
                        required
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label className="font-weight-bold">
                        Date of birth
                      </label>

                      <div className="form-row">

                        <div className="col-4">
                          <select
                            className="custom-select"
                            name="birthDay"
                            required
                            defaultValue=""
                          >
                            <option value="" disabled>DD</option>
                            {days.map((day) => (
                              <option key={day}>{day}</option>
                            ))}
                          </select>
                        </div>

                        <div className="col-4">
                          <select
                            className="custom-select"
                            name="birthMonth"
                            required
                            defaultValue=""
                          >
                            <option value="" disabled>MM</option>
                            {months.map((month) => (
                              <option key={month}>{month}</option>
                            ))}
                          </select>
                        </div>

                        <div className="col-4">
                          <select
                            className="custom-select"
                            name="birthYear"
                            required
                            defaultValue=""
                          >
                            <option value="" disabled>YYYY</option>
                            {years.map((year) => (
                              <option key={year}>{year}</option>
                            ))}
                          </select>
                        </div>

                      </div>
                    </div>

                  </div>

                  <div className="form-row">

                    <div className="form-group col-md-6">
                      <label className="font-weight-bold" htmlFor="inputMail">
                        Email
                      </label>

                      <input
                        className="form-control font-italic"
                        id="inputMail"
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        required
                      />

                      <small className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>

                    <div className="form-group col-md-6">
                      <label className="font-weight-bold" htmlFor="inputNumber">
                        Contact number
                      </label>

                      <input
                        className="form-control font-italic"
                        id="inputNumber"
                        type="tel"
                        placeholder="Contact number"
                        name="contactNumber"
                        required
                      />
                    </div>

                  </div>

                  <div className="form-row">

                    <div className="form-group col-md-6">
                      <label className="font-weight-bold" htmlFor="inputDoc">
                        Preferred doctor (if any)
                      </label>

                      <input
                        className="form-control font-italic"
                        id="inputDoc"
                        type="text"
                        placeholder="Enter doctor's name"
                        name="preferredDoctor"
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label className="font-weight-bold" htmlFor="inputMedical">
                        At the following hospital
                      </label>

                      <select
                        className="custom-select"
                        id="inputMedical"
                        name="hospital"
                      >
                        <option>No preference</option>
                        <option>Labaide Hospital</option>
                        <option>Central Hospital</option>
                        <option>Square Hospital</option>
                      </select>
                    </div>

                  </div>

                  <div className="form-row">

                    <div className="form-group col-md-6">
                      <label className="font-weight-bold" htmlFor="inputSpecialty">
                        Specialty
                      </label>

                      <select
                        className="custom-select"
                        id="inputSpecialty"
                        name="speciality"
                      >
                        <option>I am not sure</option>
                        <option>Cardiology</option>
                        <option>Dermatology</option>
                        <option>Neurology</option>
                        <option>Orthopedics</option>
                      </select>
                    </div>

                    <div className="form-group col-md-6">
                      <label className="font-weight-bold" htmlFor="inputCode">
                        Reference code (if any)
                      </label>

                      <input
                        className="form-control font-italic"
                        id="inputCode"
                        type="number"
                        placeholder="Enter the code"
                        name="referenceCode"
                      />
                    </div>

                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold" htmlFor="inputAddress">
                      Address
                    </label>

                    <input
                      className="form-control font-italic"
                      id="inputAddress"
                      type="text"
                      placeholder="Apartment, studio, or floor"
                      name="address"
                    />
                  </div>

                  <div className="form-row">

                    <div className="form-group col-md-6">
                      <div>
                        <label className="font-weight-bold">Gender</label>
                      </div>

                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          className="custom-control-input"
                          id="customRadioMale"
                          type="radio"
                          name="gender"
                          value="Male"
                          required
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadioMale"
                        >
                          Male
                        </label>
                      </div>

                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          className="custom-control-input"
                          id="customRadioFemale"
                          type="radio"
                          name="gender"
                          value="Female"
                          required
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadioFemale"
                        >
                          Female
                        </label>
                      </div>
                    </div>

                    <div className="form-group col-md-6">
                      <label className="font-weight-bold" htmlFor="inputDate">
                        Appointment date
                      </label>

                      <input
                        className="form-control"
                        id="inputDate"
                        type="date"
                        name="appointmentDate"
                        required
                      />
                    </div>

                  </div>

                  <div className="form-group">
                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        className="custom-control-input"
                        id="customControlCondition"
                        type="checkbox"
                        required
                        name="agree"
                      />

                      <label
                        className="custom-control-label"
                        htmlFor="customControlCondition"
                      >
                        Confirmation and I agree with terms and conditions
                      </label>
                    </div>
                  </div>

                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>

                  <button
                    className="btn btn-danger ml-2"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Background */}
      {showModal && (
        <div
          className="modal-backdrop fade show"
          onClick={() => setShowModal(false)}
        />
      )}

    </main>
  );
}

export default Research;
