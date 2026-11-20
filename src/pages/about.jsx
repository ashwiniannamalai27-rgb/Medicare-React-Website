
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import ContactStrip from "../components/ContactStrip";



const doctors = [
  {
    name: "Maureen M. Achebe",
    qualification: "MD Hematology",
    image: "10.jpg",
    description: "Maureen M. Achebe is a transplant Hematology specialist and Associate Professor of Medicine.",
  },
  {
    name: "Elisa Abdulhayoglu",
    qualification: "MD, MS Pediatric Medicine, Neonatology",
    image: "14.jpg",
    description: "Specialist in Neonatology and Pediatric Medicine with experience in patient care.",
  },
  { name: "Jessica Fency", qualification: "MBBS, DEM (DU), MD (Endocrinology)", image: "15.jpg" },
  { name: "Diler Acar", qualification: "MBBS, DDSc (UK), MDSc (USA)", image: "2.jpg" },
  { name: "Reza Abdi", qualification: "MBBS, FRCP (Glasgow), DDV, MCPS, MD", image: "3.png" },
  { name: "Susan Ann Abookire", qualification: "MBBS, Diploma in Dermatology and Venereology", image: "4.png" },
  { name: "Modhu Maria", qualification: "MBBS, FCPS (Dermatology & VD), MRCPS", image: "16.jpg" },
  { name: "Thomas A. Abrams", qualification: "MBBS, MS (Gen. Surgery), M. Ch. (Plastic Surgery)", image: "6.jpg" },
  { name: "Janet L. Abrahm", qualification: "MBBS, MRCP (UK), D.Card. (London)", image: "7.png" },
  { name: "Carrie P. Aaron", qualification: "MBBS, D.Card. (DU), FCPS (Medicine)", image: "8.jpg" },
];

const componentGroups = [
  [
    ["Accordion", "accordion"],
    ["Alerts", "alerts"],
    ["Background", "background"],
    ["Badges", "badges"],
    ["Breadcrumb", "breadcrumb"],
    ["Buttons", "buttons"],
    ["Cards", "cards"],
    ["Carousel", "carousel"],
  ],
  [
    ["Collapse", "collapse"],
    ["Countup", "countup"],
    ["Dropdowns", "dropdowns"],
    ["Forms", "forms"],
    ["Google Map", "google-map"],
    ["Modals", "modals"],
    ["Navbar", "navbar"],
    ["Pagination", "pagination"],
  ],
  [
    ["Popovers", "popovers"],
    ["Progress", "progress"],
    ["Spinners", "spinners"],
    ["Tables", "tables"],
    ["Tabs", "tabs"],
    ["Tooltips", "tooltips"],
    ["Toasts", "toasts"],
  ],
];

const utilityLinks = [
  "borders", "clearfix", "close-icon", "colors", "display",
  "embed", "flex", "figures", "grid", "sizing",
  "stretched-link", "spacing", "typography",
  "vertical-align", "visibility",
];

const documentationLinks = [
  "getting-started",
  "file-structure",
  "customization",
  "gulp",
  "rtl",
  "plugins",
  
];

const languages = [
  { code: "EN", label: "English", flag: "united-states.svg" },
  { code: "DE", label: "German", flag: "germany.svg" },
  { code: "AR", label: "Arabic", flag: "saudi-arabia.svg" },
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December",
];

const years = Array.from({ length: 101 }, (_, i) => 2019 - i);

function MedicareAbout() {
  const [showModal, setShowModal] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const [formData, setFormData] = useState({
    name: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    email: "",
    contactNumber: "",
    preferredDoctor: "",
    hospital: "No preference",
    speciality: "I am not sure",
    referenceCode: "",
    address: "",
    gender: "",
    appointmentDate: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Appointment Details:", formData);
    alert("Your appointment request has been submitted!");

    setShowModal(false);
  };

  const closeModal = () => setShowModal(false);

  return (
    <main className="main" id="top">

      {/* TOP NAVIGATION */}
      <nav className="navbar navbar-expand navbar-light bg-light sticky-top font-weight-semi-bold fs--1 text-base shadow-sm">
        <div className="container">

          <ul className="navbar-nav align-items-center">
            <li className="nav-item dropdown position-relative">

              <button
                className="btn btn-light btn-sm dropdown-toggle mr-2"
                type="button"
                onClick={() => setLanguageOpen(!languageOpen)}
              >
                <img
                  src="/assets/img/illustrations/united-states.svg"
                  width="20"
                  alt="Language"
                />
                {" "}{selectedLanguage}
              </button>

              {languageOpen && (
                <div className="dropdown-menu show">
                  {languages.map((language) => (
                    <button
                      className="dropdown-item"
                      type="button"
                      key={language.code}
                      onClick={() => {
                        setSelectedLanguage(language.code);
                        setLanguageOpen(false);
                      }}
                    >
                      <img
                        src={`/assets/img/illustrations/${language.flag}`}
                        width="20"
                        alt=""
                      />{" "}
                      {language.label}
                    </button>
                  ))}
                </div>
              )}

            </li>

            <li className="nav-item">
              <form
                className="input-iconic"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="input-icon">
                  <button type="submit">
                    <span className="fas fa-search text-300"></span>
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
                href="#doctors"
              >
                <span className="d-none d-md-inline">Find a </span>
                Doctor
              </a>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-primary btn-sm"
                onClick={() => setShowModal(true)}
              >
                <span className="d-none d-md-inline">Request </span>
                Appointment
              </button>
            </li>
          </ul>

        </div>
      </nav>

      {/* HOSPITAL INFORMATION NAVBAR */}
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
                    <li><a href="tel:5555551234">(555) 555-1234</a></li>
                    <li><a href="tel:5555555678">(555) 555-5678</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* MAIN NAVIGATION */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary font-weight-semi-bold py-0 fs--1">
        <div className="container">

          <div className="collapse navbar-collapse" id="navbarStandard">
            <ul className="navbar-nav">

              {/* HOME */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a className="nav-link dropdown-toggle" href="#!">
                  Home
                </a>

                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/">Header Static</Link>
                  <Link className="dropdown-item" to="/">Header Slider</Link>
                  <Link className="dropdown-item" to="/">Youtube Background</Link>
                  <Link className="dropdown-item" to="/">Self Hosted Video</Link>
                  <Link className="dropdown-item" to="/">RTL</Link>
                </div>
              </li>

              {/* PAGES */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a className="nav-link dropdown-toggle" href="#!">
                  Pages
                </a>

                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/about">About</Link>
                  <Link className="dropdown-item" to="/blog">Blog</Link>
                  <Link className="dropdown-item" to="/blog-single">Blog Detail</Link>
                  <Link className="dropdown-item" to="/research">Researches</Link>
                  <Link className="dropdown-item" to="/research-single">Research Detail</Link>
                  <Link className="dropdown-item" to="/contact">Contact</Link>
                  <Link className="dropdown-item" to="/starter">Starter</Link>
                </div>
              </li>

              {/* COMPONENTS */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a className="nav-link dropdown-toggle" href="#!">
                  Components
                </a>

                <div className="dropdown-menu dropdown-menu-card">
                  <div className="card navbar-dropdown-col-4 border-0">
                    <div className="card-body py-0">
                      <div className="row">

                        {componentGroups.map((group, index) => (
                          <div className="col-6 col-sm-auto" key={index}>
                            <ul className="nav flex-column">

                              {group.map(([name, slug]) => (
                                <li className="nav-item" key={slug}>
                                  <Link
                                    className="nav-link py-1 text-700 font-weight-medium"
                                    to={`/components/${slug}`}
                                  >
                                    {name}
                                  </Link>
                                </li>
                              ))}

                            </ul>
                          </div>
                        ))}

                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* UTILITIES */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a className="nav-link dropdown-toggle" href="#!">
                  Utilities
                </a>

                <div className="dropdown-menu">
                  {utilityLinks.map((item) => (
                    <Link
                      className="dropdown-item"
                      to={`/utilities/${item}`}
                      key={item}
                    >
                      {item.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </Link>
                  ))}
                </div>
              </li>

              {/* DOCUMENTATION */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a className="nav-link dropdown-toggle" href="#!">
                  Documentation
                </a>

                <div className="dropdown-menu">
                  {documentationLinks.map((item) => (
                    <Link
                      className="dropdown-item"
                      to={`/documentation/${item}`}
                      key={item}
                    >
                      {item.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </Link>
                  ))}

                  <Link className="dropdown-item" to="/documentation/changelog">
                    Changelog
                  </Link>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* ABOUT HERO */}
      <section className="text-primary position-relative py-5">
        <div
          className="bg-holder overlay overlay-white-gradient"
          style={{
            backgroundImage: "url('/assets/img/doctor/10.jpg')",
          }}
        ></div>

        <div className="container position-relative">
          <h3>About medicare</h3>
          <p className="font-weight-bold mb-0">About Our Hospital</p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-10">
              <div className="row">

                <div className="col-lg-8 mb-4 order-lg-1">
                  <h6 className="mb-1 text-uppercase">Introducing</h6>

                  <h3 className="text-uppercase">
                    Tackle the challenge of delivering health care in 21
                    <sup className="fs--1">st</sup> century.
                  </h3>

                  <div className="border-dark text-left position-relative">
                    <hr className="hr-short position-absolute d-block bg-primary m-0" />
                  </div>

                  <p className="lead mt-4">
                    We provide the most full medical services, so every
                    person could have the opportunity to receive
                    qualitative medical help.
                  </p>

                  <p>
                    Our Clinic has grown to provide a world class facility
                    for the treatment of tooth loss, dental cosmetics and
                    advanced restorative dentistry. We are among the most
                    qualified providers with over 30 years of quality
                    training and experience.
                  </p>

                  <p>
                    We offer extensive medical procedures to outbound and
                    inbound patients. We are proud of our achievements
                    and our commitment to patient recovery.
                  </p>

                  <img
                    className="mt-3"
                    src="https://prium.github.io/medicare/v1.1.0/assets/img/illustrations/signature.png"
                    alt="Signature"
                    width="170"
                  />
                </div>

                <div className="col-lg-4">
                  <img
                    className="img-fluid rounded"
                    src="https://prium.github.io/medicare/v1.1.0/assets/img/about/9.jpg"
                    alt="Hospital"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="bg-primary py-5">
        <div className="container">
          <div className="row">

            {[
              { image: "happy-1.png", number: "36487", label: "Clients" },
              { image: "shop.png", number: "512", label: "Hospital Rooms" },
              { image: "pie-chart.png", number: "25", label: "Years of Experience" },
              { image: "like.png", number: "130", label: "Qualified Staffs" },
            ].map((item) => (
              <div className="col-6 col-lg-3 text-center mb-4 mb-lg-0" key={item.label}>
                <img
                  className="mb-2"
                  src={`/assets/img/icons/${item.image}`}
                  alt=""
                  width="50"
                />
                <br />
                <span className="fs-4 font-weight-medium text-white">
                  {item.number}
                </span>
                <p className="fs-1 text-white">{item.label}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section id="doctors" className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h6 className="font-weight-bold">Meet Our Experienced Team</h6>
            <h3>Our Dedicated Doctors Team</h3>
            <hr className="hr-short border-600" />
          </div>

          <div className="row justify-content-center">
            <div className="col-xxl-10">

              {/* FEATURED DOCTORS */}
              <div className="row mt-3">

                {doctors.slice(0, 2).map((doctor) => (
                  <div className="col-lg-6 mb-4" key={doctor.name}>
                    <div className="rounded-soft overflow-hidden bg-light hvr-shadow">
                      <div className="row">

                        <div className="col-xl-6 col-lg-5 col-md-6 col-12">
                          <img
                            className="img-fluid w-100"
                            src={`/assets/img/doctor/${doctor.image}`}
                            alt={doctor.name}
                          />
                        </div>

                        <div className="col align-self-center py-3">
                          <h5 className="mb-0">{doctor.name}</h5>

                          <p className="font-weight-semi-bold fs--1 text-500">
                            {doctor.qualification}
                          </p>

                          <p>{doctor.description}</p>

                          <div className="icon-group mt-lg-3">
                            <a className="icon-item bg-white text-twitter" href="#!">
                              <span className="fab fa-twitter"></span>
                            </a>
                            <a className="icon-item bg-white text-linkedin" href="#!">
                              <span className="fab fa-linkedin-in"></span>
                            </a>
                            <a className="icon-item bg-white text-primary" href="#!">
                              <span className="fab fa-instagram"></span>
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}

              </div>

              {/* REMAINING DOCTORS */}
              <div className="row mt-5">

                {doctors.slice(2).map((doctor) => (
                  <div
                    className="col-xl-3 col-lg-4 col-md-6 mb-5"
                    key={doctor.name}
                  >
                    <div className="card text-center h-100 hvr-shadow">

                      <img
                        className="card-img-top"
                        src={`/assets/img/doctor/${doctor.image}`}
                        alt={doctor.name}
                      />

                      <div className="card-body bg-light">
                        <h5 className="card-title mb-0">
                          {doctor.name}
                        </h5>

                        <p className="font-weight-semi-bold fs--1 text-500 mt-1">
                          {doctor.qualification}
                        </p>

                        <div className="icon-group justify-content-center mt-3">
                          <a className="icon-item bg-white text-twitter" href="#!">
                            <span className="fab fa-twitter"></span>
                          </a>
                          <a className="icon-item bg-white text-linkedin" href="#!">
                            <span className="fab fa-linkedin-in"></span>
                          </a>
                          <a className="icon-item bg-white text-primary" href="#!">
                            <span className="fab fa-instagram"></span>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>
      </section>

     
                  <ContactStrip/>

                

            
     
           
             

      {/* APPOINTMENT MODAL */}
      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Request an Appointment</h5>

                <button
                  type="button"
                  className="close"
                  onClick={closeModal}
                >
                  <span>×</span>
                </button>
              </div>

              <form onSubmit={handleSubmit}>

                <div className="modal-body">
                  <div className="row">

                    <div className="col-md-6 mb-3">
                      <label>Full Name</label>
                      <input
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Email Address</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Contact Number</label>
                      <input
                        className="form-control"
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Gender</label>
                      <select
                        className="form-control"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="col-12 mb-2">
                      <label>Date of Birth</label>
                    </div>

                    <div className="col-md-4 mb-3">
                      <select
                        className="form-control"
                        name="birthDay"
                        value={formData.birthDay}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Day</option>
                        {days.map((day) => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-4 mb-3">
                      <select
                        className="form-control"
                        name="birthMonth"
                        value={formData.birthMonth}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Month</option>
                        {months.map((month) => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-4 mb-3">
                      <select
                        className="form-control"
                        name="birthYear"
                        value={formData.birthYear}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Year</option>
                        {years.map((year) => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Preferred Doctor</label>
                      <select
                        className="form-control"
                        name="preferredDoctor"
                        value={formData.preferredDoctor}
                        onChange={handleChange}
                      >
                        <option value="">Select Doctor</option>
                        {doctors.map((doctor) => (
                          <option key={doctor.name} value={doctor.name}>
                            {doctor.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Hospital</label>
                      <select
                        className="form-control"
                        name="hospital"
                        value={formData.hospital}
                        onChange={handleChange}
                      >
                        <option>No preference</option>
                        <option>Main Hospital</option>
                        <option>City Hospital</option>
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Speciality</label>
                      <select
                        className="form-control"
                        name="speciality"
                        value={formData.speciality}
                        onChange={handleChange}
                      >
                        <option>I am not sure</option>
                        <option>Cardiology</option>
                        <option>Dermatology</option>
                        <option>Endocrinology</option>
                        <option>General Medicine</option>
                        <option>Pediatrics</option>
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Appointment Date</label>
                      <input
                        className="form-control"
                        type="date"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Reference Code</label>
                      <input
                        className="form-control"
                        name="referenceCode"
                        value={formData.referenceCode}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Address</label>
                      <input
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12 mb-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="agree"
                          checked={formData.agree}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-check-label">
                          I agree to the terms and conditions.
                        </label>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="btn btn-primary">
                    Submit Appointment
                  </button>
                </div>

              </form>

            </div>
          </div>
        </div>
      )}
       <Footer/>
    </main>
  );
}

export default MedicareAbout;
