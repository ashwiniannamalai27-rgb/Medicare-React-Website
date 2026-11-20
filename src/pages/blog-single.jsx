
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactStrip from "../components/ContactStrip";

const blogPosts = [
  {
    id: 1,
    image: "/assets/img/blog/3.jpg",
    title: "Should You Be Worried About Microplastics in Your Food?",
    author: "John Doe",
    date: "10 Jan, 2019",
    excerpt:
      "Plastic — it’s in the air, sea and probably your body. Find out what are microplastics doing to your health...",
  },
  {
    id: 2,
    image: "/assets/img/blog/12.jpg",
    title: "What to Expect During and After a Breast Biopsy",
    author: "Wiliam Petro",
    date: "03 Feb, 2019",
    excerpt:
      "We interview Dr Lim Siew Kuan, a general surgeon at Mount Elizabeth Novena Hospital, to understand what to...",
  },
  {
    id: 3,
    image: "/assets/img/blog/3.jpg",
    title: "How Heart Attack Signs Differ in Men & Women",
    author: "Sultan Sentu",
    date: "05 Mar, 2019",
    excerpt:
      "Is there ‘gender equality’ in heart attacks? The short answer is no. Here’s what you need to know...",
  },
  {
    id: 4,
    image: "/assets/img/blog/4.jpg",
    title: "Prenatal Infections and How to Avoid Them",
    author: "Marry Com",
    date: "29 Jun, 2019",
    excerpt:
      "Prenatal infections can interfere with the health of both you and your baby, so it’s important to take steps to prevent them....",
  },
  {
    id: 5,
    image: "/assets/img/blog/5.jpg",
    title: "What are the Screening Options for Heart Disease?",
    author: "Illiana Daina",
    date: "29 Jun, 2019",
    excerpt:
      "We interview Dr Lim Siew Kuan, a general surgeon at Mount Elizabeth Novena Hospital, to understand what to expect...",
  },
  {
    id: 6,
    image: "/assets/img/blog/6.jpg",
    title: "Should You Be Worried About Microplastics?",
    author: "Tom Andrew",
    date: "29 Jun, 2019",
    excerpt:
      "Plastic — it’s in the air, sea and probably your body. Find out what are microplastics doing to your health....",
  },
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
    ["Collapse", "collapse"],
  ],
  [
    ["Countup", "countup"],
    ["Dropdowns", "dropdowns"],
    ["Fancyscroll", "fancyscroll"],
    ["Flexslider", "flexslider"],
    ["Forms", "forms"],
    ["Google map", "google-map"],
    ["Hoverbox", "hoverbox"],
    ["List group", "list-group"],
  ],
  [
    ["Modals", "modals"],
    ["Media object", "media-object"],
    ["Navs", "navs"],
    ["Navbar", "navbar"],
    ["Page headers", "page-headers"],
    ["Pagination", "pagination"],
    ["Popovers", "popovers"],
    ["Progress", "progress"],
  ],
  [
    ["Scrollspy", "scrollspy"],
    ["Spinners", "spinners"],
    ["Tables", "tables"],
    ["Tabs", "tabs"],
    ["Tooltips", "tooltips"],
    ["Toasts", "toasts"],
    ["Ytplayer", "ytplayer"],
    ["Php ajax form", "php-ajax-form"],
  ],
];

const utilityLinks = [
  "borders",
  "clearfix",
  "close-icon",
  "colors",
  "display",
  "embed",
  "flex",
  "figures",
  "grid",
  "sizing",
  "stretched-link",
  "spacing",
  "typography",
  "vertical-align",
  "visibility",
];

const documentationLinks = [
  "getting-started",
  "file-structure",
  "customization",
  "gulp",
  "RTL",
  "plugins",
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const years = Array.from({ length: 2019 - 1919 + 1 }, (_, i) => 2019 - i);

function MedicareBlog() {
  const [language, setLanguage] = useState("EN");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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

  const flagIcons = {
    EN: "/assets/img/illustrations/united-states.svg",
    DE: "/assets/img/illustrations/germany.svg",
    AR: "/assets/img/illustrations/saudi-arabia.svg",
  };

  const filteredPosts = blogPosts.filter((post) => {
    const search = searchQuery.toLowerCase();

    return (
      post.title.toLowerCase().includes(search) ||
      post.author.toLowerCase().includes(search) ||
      post.excerpt.toLowerCase().includes(search)
    );
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();

    console.log("Appointment submitted:", formData);
    alert("Your appointment request has been submitted!");

    setFormData({
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

    setShowModal(false);
  };

  const renderDropdownLinks = (links, folder) =>
    links.map((item) => (
      <a
        className="dropdown-item"
        href={`${folder}/${item[1] || item}.html`}
        key={item[1] || item}
      >
        {item[0] || item}
      </a>
    ));

  return (
    <main className="main" id="top">

      {/* PRELOADER
      <div className="preloader p-0" id="preloader">
        <div className="loader d-flex flex-column align-items-center">
          <img src="/assets/img/illustrations/loader.gif" alt="Loading" />
        </div>
      </div> */}

      {/* BACK TO TOP */}
      <a className="bottom-to-top rounded-soft" href="#top">
        <span className="fas fa-angle-up lg" />
      </a>

      {/* TOP UTILITY NAVBAR */}
      <nav className="navbar navbar-expand navbar-light bg-light sticky-top font-weight-semi-bold fs--1 text-base shadow-sm">
        <div className="container">

          <ul className="navbar-nav align-items-center">
            <li className="nav-item dropdown">

              <button
                className="btn btn-light btn-sm dropdown-toggle mr-2"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={flagIcons[language]} width="20" alt={language} />
              </button>

              <div className="dropdown-menu">
                {["EN", "DE", "AR"].map((code) => (
                  <button
                    type="button"
                    className="dropdown-item d-flex justify-content-between align-items-center"
                    key={code}
                    onClick={() => setLanguage(code)}
                  >
                    <span>
                      <img src={flagIcons[code]} width="20" alt="" />
                      <span className="ml-2">{code}</span>
                    </span>

                    {language === code && (
                      <span className="fas fa-check" />
                    )}
                  </button>
                ))}
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </li>
          </ul>

          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link
                className="btn btn-outline-danger btn-sm mx-2"
                to="/contact"
              >
                <span className="d-none d-md-inline">Find a </span>
                Doctor
              </Link>
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

      {/* BRAND AND CONTACT NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-200 navbar-split py-3">
        <div className="container">

          <Link
            className="navbar-brand d-flex align-items-center z-index-1"
            to="/"
          >
            <img src="/assets/img/logo.png" alt="Medicare" height="30" />
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

          <button
            className="navbar-toggler ml-4 z-index-1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarStandard"
            aria-controls="navbarStandard"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

        </div>
      </nav>

      {/* MAIN NAVIGATION */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary font-weight-semi-bold py-0 fs--1">
        <div className="container">

          <div className="collapse navbar-collapse" id="navbarStandard">
            <ul className="navbar-nav">

              {/* HOME DROPDOWN */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  data-toggle="dropdown"
                >
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

              {/* PAGES DROPDOWN */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  data-toggle="dropdown"
                >
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

              {/* COMPONENTS DROPDOWN */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  data-toggle="dropdown"
                >
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
                                  <a
                                    className="nav-link py-1 text-700 font-weight-medium"
                                    href={`/components/${slug}.html`}
                                  >
                                    {name}
                                  </a>
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

              {/* UTILITIES DROPDOWN */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  data-toggle="dropdown"
                >
                  Utilities
                </a>

                <div className="dropdown-menu">
                  {utilityLinks.map((item) => (
                    <a
                      className="dropdown-item"
                      href={`/utilities/${item}.html`}
                      key={item}
                    >
                      {item.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </a>
                  ))}
                </div>
              </li>

              {/* DOCUMENTATION DROPDOWN */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  data-toggle="dropdown"
                >
                  Documentation
                </a>

                <div className="dropdown-menu">
                  {documentationLinks.map((item) => (
                    <a
                      className="dropdown-item"
                      href={`/documentation/${item}.html`}
                      key={item}
                    >
                      {item.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </a>
                  ))}

                  <a className="dropdown-item" href="/changelog.html">
                    Changelog
                  </a>
                </div>
              </li>

            </ul>
          </div>

        </div>
      </nav>
      {/* ABOUT HERO */}
      <section className="text-primary position-relative py-7">
        <div
          className="bg-holder overlay overlay-white-gradient"
          style={{
            backgroundImage: "url('/assets/img/doctor/10.jpg')",
          }}
        ></div>

        <div className="container position-relative">
          <h3>Blog of our medicare</h3>
          <p className="font-weight-bold mb-0">Achievements</p>
        </div>
      </section>

     

      {/* BLOG POSTS */}
      <section>
        <div className="container">
          <div className="row">

            {filteredPosts.map((post) => (
              <div className="col-lg-6 mb-5" key={post.id}>
                <div className="row">

                  <div className="col-sm-5 mb-3 mb-sm-0">
                    <Link to="/blog-single">
                      <img
                        className="img-fluid rounded"
                        src={post.image}
                        alt={post.title}
                      />
                    </Link>
                  </div>

                  <div className="col pr-4">

                    <h5 className="mb-1">
                      <Link to="/blog-single">
                        {post.title}
                      </Link>
                    </h5>

                    <p className="font-weight-semi-bold fs--1 mb-2">
                      <a className="text-500 text-sans-serif" href="#!">
                        {post.author}
                      </a>

                      <span
                        className="fas fa-circle text-500 text-sans-serif"
                        data-fa-transform="shrink-12"
                      />

                      <span className="text-500 text-sans-serif ml-2">
                        {post.date}
                      </span>
                    </p>

                    <p className="mb-0">
                      {post.excerpt}
                    </p>

                  </div>
                </div>
              </div>
            ))}

            {filteredPosts.length === 0 && (
              <div className="col-12 text-center py-5">
                <h4>No blog posts found</h4>
                <p>Try searching with a different keyword.</p>

                <button
                  className="btn btn-primary"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

    
           
        

      
           

              
                  
                
                  
         
               <ContactStrip/>

      {/* HOSPITAL FOOTER INFORMATION */}
      <section>
        <div className="container">
          <div className="row">

            <div className="col">
              <Link className="d-block" to="/">
                <img
                  src="/assets/img/logo.png"
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
                          "Obstetrics and Gynecology",
                        ].map((item, index) => (
                          <a className="text-600 py-1" href="#!" key={index}>
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
                    ].map((item) => (
                      <a className="text-600 py-1" href="#!" key={item}>
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

      {/* COPYRIGHT FOOTER */}
      <footer className="bg-dark py-3">
        <div className="container">
          <div className="row flex-center">

            <div className="col text-center text-md-left">
              <p className="mb-0">
                Thank you for creating with Medicare
                <br className="d-sm-none" />
                <span className="d-none d-sm-inline-block"> | </span>
                {new Date().getFullYear()} &copy;{" "}
                <a
                  className="text-700"
                  href="https://themewagon.com/"
                  target="_blank"
                  rel="noreferrer"
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

      {/* APPOINTMENT MODAL */}
      {showModal && (
        <div
          className="modal fade show d-block bd-example-modal-lg"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modalLabel"
          aria-modal="true"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 2000,
            overflowY: "auto",
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
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

                <form onSubmit={handleAppointmentSubmit}>

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
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label className="font-weight-bold">
                        Date of birth*
                      </label>

                      <div className="form-row">

                        <div className="col-4">
                          <select
                            className="custom-select"
                            name="birthDay"
                            value={formData.birthDay}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">DD</option>
                            {days.map((day) => (
                              <option key={day} value={day}>
                                {day}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="col-4">
                          <select
                            className="custom-select"
                            name="birthMonth"
                            value={formData.birthMonth}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">MM</option>
                            {months.map((month) => (
                              <option key={month} value={month}>
                                {month}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="col-4">
                          <select
                            className="custom-select"
                            name="birthYear"
                            value={formData.birthYear}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">YYYY</option>
                            {years.map((year) => (
                              <option key={year} value={year}>
                                {year}
                              </option>
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
                        placeholder="Enter Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
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
                        value={formData.contactNumber}
                        onChange={handleInputChange}
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
                        value={formData.preferredDoctor}
                        onChange={handleInputChange}
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
                        value={formData.hospital}
                        onChange={handleInputChange}
                      >
                        <option value="No preference">No preference</option>
                        <option value="Labaide Hospital">Labaide Hospital</option>
                        <option value="Central Hospital">Central Hospital</option>
                        <option value="Square Hospital">Square Hospital</option>
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
                        value={formData.speciality}
                        onChange={handleInputChange}
                      >
                        <option value="I am not sure">I am not sure</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Neurology">Neurology</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="General Medicine">General Medicine</option>
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
                        value={formData.referenceCode}
                        onChange={handleInputChange}
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
                      value={formData.address}
                      onChange={handleInputChange}
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
                          checked={formData.gender === "Male"}
                          onChange={handleInputChange}
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
                          checked={formData.gender === "Female"}
                          onChange={handleInputChange}
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
                        value={formData.appointmentDate}
                        onChange={handleInputChange}
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
                        name="agree"
                        checked={formData.agree}
                        onChange={handleInputChange}
                        required
                      />

                      <label
                        className="custom-control-label"
                        htmlFor="customControlCondition"
                      >
                        Confirmation and I agree with terms and conditions
                      </label>

                    </div>
                  </div>

                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                  />

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

    </main>
  );
}

export default MedicareBlog;
