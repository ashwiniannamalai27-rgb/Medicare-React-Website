import React from "react";
import ContactStrip from "../components/ContactStrip";


function Starter() {
  return (
    <main className="main" id="top">

      {/* Preloader
      <div className="preloader p-0" id="preloader">
        <div className="loader d-flex flex-column align-items-center">
          <img src="/assets/img/illustrations/loader.gif" alt="" />
        </div>
      </div> */}

      <a className="bottom-to-top rounded-soft" href="#top">
        <span className="fas fa-angle-up lg"></span>
      </a>

      {/* Top Navbar */}
      <nav className="navbar navbar-expand navbar-light bg-light sticky-top font-weight-semi-bold fs--1 text-base shadow-sm">
        <div className="container">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item dropdown">
              <a className="btn btn-light btn-sm dropdown-toggle mr-2" href="#!" data-toggle="dropdown">
                <img src="/assets/img/illustrations/united-states.svg" width="20" alt="" />
              </a>

              <div className="dropdown-menu">
                <a className="dropdown-item" href="#!">EN - English</a>
                <a className="dropdown-item" href="#!">DE - German</a>
                <a className="dropdown-item" href="#!">AR - Arabic</a>
              </div>
            </li>

            <li className="nav-item">
              <form className="input-iconic">
                <div className="input-icon">
                  <button type="submit">
                    <span className="fas fa-search text-300"></span>
                  </button>
                </div>
                <input className="form-control form-control-sm" type="search" placeholder="Search..." />
              </form>
            </li>
          </ul>

          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a className="btn btn-outline-danger btn-sm mx-2" href="#!">
                <span className="d-none d-md-inline">Find a </span>Doctor
              </a>
            </li>

            <li className="nav-item">
              <a className="btn btn-primary btn-sm" href="#appointmentModal" data-toggle="modal">
                <span className="d-none d-md-inline">Request </span>Appointment
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hospital Information Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-200 navbar-split py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center z-index-1" href="index.html">
            <img src="/assets/img/logo.png" alt="Medicare" height="30" />
          </a>

          <div className="navbar-nav text-base d-none d-lg-flex">
            <div className="nav-item">
              <div className="media border-right pr-3 mr-3">
                <span className="fas fa-map-marker-alt fs-2 text-primary"></span>
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
                <span className="fas fa-headset fs-2 text-primary"></span>
                <div className="media-body ml-2">
                  <h5 className="fs-0 mb-1">Phone Appointment</h5>
                  <ul className="nav flex-column fs--1">
                    <li className="nav-item">
                      <a href="tel:5555551234">(555) 555-1234</a>
                    </li>
                    <li className="nav-item">
                      <a href="tel:5555555678">(555) 555-5678</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <button className="navbar-toggler ml-4 z-index-1" type="button" data-toggle="collapse" data-target="#navbarStandard">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary font-weight-semi-bold py-0 fs--1">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarStandard">
            <ul className="navbar-nav">

              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Home</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="index-static.html">Header Static</a>
                  <a className="dropdown-item" href="index.html">Header Slider</a>
                  <a className="dropdown-item" href="index-youtube.html">Youtube Background</a>
                  <a className="dropdown-item" href="index-selfhosted.html">Self Hosted Video</a>
                  <a className="dropdown-item" href="index-rtl.html">RTL</a>
                </div>
              </li>

              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Pages</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="about.html">About</a>
                  <a className="dropdown-item" href="blog.html">Blog</a>
                  <a className="dropdown-item" href="blog-single.html">Blog Detail</a>
                  <a className="dropdown-item" href="research.html">Researches</a>
                  <a className="dropdown-item" href="research-single.html">Research Detail</a>
                  <a className="dropdown-item" href="contact.html">Contact</a>
                  <a className="dropdown-item" href="starter.html">Starter</a>
                </div>
              </li>

              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Components</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="components/accordion.html">Accordion</a>
                  <a className="dropdown-item" href="components/alerts.html">Alerts</a>
                  <a className="dropdown-item" href="components/background.html">Background</a>
                  <a className="dropdown-item" href="components/buttons.html">Buttons</a>
                  <a className="dropdown-item" href="components/cards.html">Cards</a>
                  <a className="dropdown-item" href="components/carousel.html">Carousel</a>
                  <a className="dropdown-item" href="components/forms.html">Forms</a>
                  <a className="dropdown-item" href="components/modals.html">Modals</a>
                  <a className="dropdown-item" href="components/navbar.html">Navbar</a>
                  <a className="dropdown-item" href="components/tables.html">Tables</a>
                </div>
              </li>

              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Utilities</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="utilities/borders.html">Borders</a>
                  <a className="dropdown-item" href="utilities/colors.html">Colors</a>
                  <a className="dropdown-item" href="utilities/display.html">Display</a>
                  <a className="dropdown-item" href="utilities/flex.html">Flex</a>
                  <a className="dropdown-item" href="utilities/grid.html">Grid</a>
                  <a className="dropdown-item" href="utilities/spacing.html">Spacing</a>
                  <a className="dropdown-item" href="utilities/typography.html">Typography</a>
                </div>
              </li>

              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Documentation</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="documentation/getting-started.html">Getting Started</a>
                  <a className="dropdown-item" href="documentation/file-structure.html">File Structure</a>
                  <a className="dropdown-item" href="documentation/customization.html">Customization</a>
                  <a className="dropdown-item" href="documentation/plugins.html">Plugins</a>
                  <a className="dropdown-item" href="changelog.html">Changelog</a>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-0">
        <div className="container">
          <div className="row min-vh-75 align-items-center">
            <div className="col">
              <h1>Get started!</h1>
              <p className="lead">Good things happen to those who wait 🤠</p>
            </div>
          </div>
        </div>
      </section>

     <ContactStrip/>

            
          

      {/* Footer Information */}
      <section>
        <div className="container">
          <div className="row">

            <div className="col">
              <a className="d-block" href="index.html">
                <img src="/assets/img/logo.png" alt="Medicare" height="40" />
              </a>

              <h5 className="text-uppercase border-bottom mt-4 pb-2 mb-3 d-inline-block">
                Brigham and Women's Hospital
              </h5>

              <p className="text-uppercase mb-1">75 Francis Street, Boston MA 02115</p>
              <p className="mb-1">General information: <a href="#!">671-732-5500</a></p>
              <p className="mb-1">New Patients: <a href="#!">800-294-9999</a></p>
            </div>

            <div className="col-xl-8 mt-4 mt-xl-0">
              <div className="row">

                <div className="col-lg-3">
                  <h5 className="fs-0 text-uppercase border-bottom pb-2 mb-3">Centers</h5>
                  <div className="nav flex-column">
                    <a className="text-600 py-1" href="#!">Cancer Center</a>
                    <a className="text-600 py-1" href="#!">Heart & Vascular Center</a>
                    <a className="text-600 py-1" href="#!">The Lung Center</a>
                    <a className="text-600 py-1" href="#!">Neurosciences Center</a>
                    <a className="text-600 py-1" href="#!">Orthopaedic & Arthritis Center</a>
                    <a className="text-600 py-1" href="#!">Primary Care Center</a>
                    <a className="text-600 py-1" href="#!">Women's Health Center</a>
                  </div>
                </div>

                <div className="col-lg-6 mt-4 mt-lg-0">
                  <h5 className="fs-0 text-uppercase border-bottom pb-2 mb-3">Clinical Departments</h5>

                  <div className="row no-gutters">
                    <div className="col">
                      <div className="nav flex-column">
                        <a className="text-600 py-1" href="#!">Anesthesiology</a>
                        <a className="text-600 py-1" href="#!">Dermatology</a>
                        <a className="text-600 py-1" href="#!">Emergency Medicine</a>
                        <a className="text-600 py-1" href="#!">Medicine</a>
                        <a className="text-600 py-1" href="#!">Neurology</a>
                      </div>
                    </div>

                    <div className="col">
                      <div className="nav flex-column">
                        <a className="text-600 py-1" href="#!">Neurosurgery</a>
                        <a className="text-600 py-1" href="#!">Orthopaedic Surgery</a>
                        <a className="text-600 py-1" href="#!">Obstetrics and Gynecology</a>
                        <a className="text-600 py-1" href="#!">Obstetrics and Gynecology</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 mt-4 mt-lg-0">
                  <h5 className="fs-0 text-uppercase border-bottom pb-2 mb-3">Departments</h5>
                  <div className="nav flex-column">
                    <a className="text-600 py-1" href="#!">Anesthesiology</a>
                    <a className="text-600 py-1" href="#!">Dermatology</a>
                    <a className="text-600 py-1" href="#!">Emergency Medicine</a>
                    <a className="text-600 py-1" href="#!">Medicine</a>
                    <a className="text-600 py-1" href="#!">Neurology</a>
                    <a className="text-600 py-1" href="#!">Neurosurgery</a>
                    <a className="text-600 py-1" href="#!">Orthopaedic Surgery</a>
                    <a className="text-600 py-1" href="#!">Obstetrics and Gynecology</a>
                    <a className="text-600 py-1" href="#!">Obstetrics and Gynecology</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark py-3">
        <div className="container">
          <div className="row flex-center">
            <div className="col text-center text-md-left">
              <p className="mb-0">
                Thank you for creating with medicare
                <br className="d-sm-none" />
                <span className="d-none d-sm-inline-block">| </span>
                2026 © <a className="text-700" href="https://themewagon.com/">ThemeWagon</a>
              </p>
            </div>

            <div className="d-none d-md-block col-md-auto">
              <p className="mb-0">v1.1.0</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Appointment Modal */}
      <div className="modal fade bd-example-modal-lg" id="appointmentModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Make Appointment</h5>
              <button className="close" type="button" data-dismiss="modal">
                <span>×</span>
              </button>
            </div>

            <div className="modal-body p-4">
              <form className="zform" method="post">

                <input className="form-control" type="hidden" name="to" value="username@domain.extension" />

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputName">Patient name</label>
                    <input className="form-control" id="inputName" type="text" placeholder="Enter full name" name="name" required />
                  </div>

                  <div className="form-group col-md-6">
                    <label>Date of birth*</label>
                    <div className="form-row">
                      <div className="col-4">
                        <select className="custom-select" name="birthDay" required>
                          <option value="">DD</option>
                          {Array.from({ length: 31 }, (_, i) => (
                            <option key={i + 1}>{i + 1}</option>
                          ))}
                        </select>
                      </div>

                      <div className="col-4">
                        <select className="custom-select" name="birthMonth" required>
                          <option value="">MM</option>
                          {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month) => (
                            <option key={month}>{month}</option>
                          ))}
                        </select>
                      </div>

                      <div className="col-4">
                        <select className="custom-select" name="birthYear" required>
                          <option value="">YYYY</option>
                          {Array.from({ length: 101 }, (_, i) => 2019 - i).map((year) => (
                            <option key={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputMail">Email</label>
                    <input className="form-control" id="inputMail" type="email" placeholder="Enter Your Email" name="email" required />
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="inputNumber">Contact number</label>
                    <input className="form-control" id="inputNumber" type="tel" placeholder="Contact number" name="contactNumber" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputDoc">Preferred doctor (if any)</label>
                    <input className="form-control" id="inputDoc" type="text" placeholder="Enter doctor's name" name="preferredDoctor" />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="inputMedical">At the following hospital</label>
                    <select className="custom-select" id="inputMedical" name="hospital">
                      <option>No preference</option>
                      <option>Labaide Hospital</option>
                      <option>Central Hospital</option>
                      <option>Square Hospital</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputSpecialty">Specialty</label>
                    <select className="custom-select" id="inputSpecialty" name="speciality">
                      <option>I am not sure</option>
                      <option>Labaide Hospital</option>
                      <option>Central Hospital</option>
                      <option>Square Hospital</option>
                    </select>
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="inputCode">Reference code (if any)</label>
                    <input className="form-control" id="inputCode" type="number" placeholder="Enter the code" name="referenceCode" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input className="form-control" id="inputAddress" type="text" placeholder="Apartment, studio, or floor" name="address" />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Gender</label>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input className="custom-control-input" id="customRadioMale" type="radio" name="gender" required />
                      <label className="custom-control-label" htmlFor="customRadioMale">Male</label>
                    </div>

                    <div className="custom-control custom-radio custom-control-inline">
                      <input className="custom-control-input" id="customRadioFemale" type="radio" name="gender" required />
                      <label className="custom-control-label" htmlFor="customRadioFemale">Female</label>
                    </div>
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="inputDate">Appointment date</label>
                    <input className="form-control" id="inputDate" type="date" name="appointmentDate" required />
                  </div>
                </div>

                <div className="form-group">
                  <div className="custom-control custom-checkbox mb-3">
                    <input className="custom-control-input" id="customControlCondition" type="checkbox" required name="agree" />
                    <label className="custom-control-label" htmlFor="customControlCondition">
                      Confirmation and I agree with terms and conditions
                    </label>
                  </div>
                </div>

                <button className="btn btn-primary" type="submit">Submit</button>
                <button className="btn btn-danger ml-2" type="button" data-dismiss="modal">Cancel</button>

              </form>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default Starter;