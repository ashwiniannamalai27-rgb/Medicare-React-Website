
import { useState } from "react";
import ContactStrip from "../components/ContactStrip";

const A = "/assets";

const pages = [
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Blog Detail", "/blog-single"],
  ["Researches", "/research"],
  ["Research Detail", "/research-single"],
  ["Contact", "/contact"],
  ["Starter", "/starter"],
];

const componentLinks = [
  ["Accordion", "accordion"], ["Alerts", "alerts"],
  ["Background", "background"], ["Badges", "badges"],
  ["Breadcrumb", "breadcrumb"], ["Buttons", "buttons"],
  ["Cards", "cards"], ["Carousel", "carousel"],
  ["Collapse", "collapse"], ["Countup", "countup"],
  ["Dropdowns", "dropdowns"], ["Fancyscroll", "fancyscroll"],
  ["Flexslider", "flexslider"], ["Forms", "forms"],
  ["Google map", "google-map"], ["Hoverbox", "hoverbox"],
  ["List group", "list-group"], ["Modals", "modals"],
  ["Media object", "media-object"], ["Navs", "navs"],
  ["Navbar", "navbar"], ["Page headers", "page-headers"],
  ["Pagination", "pagination"], ["Popovers", "popovers"],
  ["Progress", "progress"], ["Scrollspy", "scrollspy"],
  ["Spinners", "spinners"], ["Tables", "tables"],
  ["Tabs", "tabs"], ["Tooltips", "tooltips"],
  ["Toasts", "toasts"], ["Ytplayer", "ytplayer"],
  ["Php ajax form", "php-ajax-form"],
];

const utilities = [
  "borders", "clearfix", "close-icon", "colors", "display",
  "embed", "flex", "figures", "grid", "sizing",
  "stretched-link", "spacing", "typography",
  "vertical-align", "visibility",
];

const documentation = [
  ["Getting started", "getting-started"],
  ["File structure", "file-structure"],
  ["Customization", "customization"],
  ["Gulp", "gulp"],
  ["RTL", "RTL"],
  ["Plugins", "plugins"],
  ["Changelog", "../changelog"],
];

const helpLinks = [
  "Find a Doctor",
  "Request Appointment",
  "Location",
  "Services",
];

const excellenceCenters = [
  "Cancer Center",
  "Orthopedic center",
  "Heart and vascular center",
  "The lung center",
  "Neuroscience center",
  "Women Health Center",
  "Primary Care Center",
  "All Departments & services",
];

const newsCards = [
  {
    image: "11.jpg",
    title: "Brigham Health Physicians Named 'Top Doctors'",
    description:
      "More than 275 Brigham Health physicians were included on Boston magazine’s 2019 list of Top Doctors. To prepare the annual list, Boston magazine partners with Castle Connolly Medical.",
  },
  {
    image: "8.jpg",
    title: "BWH Named to US News & World Report's Honor Roll",
    description:
      "Brigham and Women’s Hospital has ranked among the top 20 best hospitals in the nation on US News and World Report’s list.",
  },
];

const latestNews = [
  "Scientists create molecular tool to remove toxic protein from neuronal models of dementia",
  "Older women benefit significantly when screened with 3-D mammography",
  "Older women benefit significantly when screened with 3-D mammography",
  "Public announcement concerning a proposed health care project",
];

const blogPosts = [
  {
    image: "12.jpg",
    title: "Should You Be Worried About Microplastics in Your Food?",
    author: "John Doe",
    date: "10 Jan, 2019",
    description:
      "Plastic — it’s in the air, sea and probably your body. Find out what are microplastics doing to your health...",
  },
  {
    image: "12.jpg",
    title: "What to Expect During and After a Breast Biopsy",
    author: "Wiliam Petro",
    date: "03 Feb, 2019",
    description:
      "We interview Dr Lim Siew Kuan, a general surgeon at Mount Elizabeth Novena Hospital, to understand what to expect...",
  },
  {
    image: "3.jpg",
    title: "How Heart Attack Signs Differ in Men & Women",
    author: "Sultan Sentu",
    date: "05 Mar, 2019",
    description:
      "Is there gender equality in heart attacks? The short answer is no. Here’s what you need to know...",
  },
  {
    image: "4.jpg",
    title: "Prenatal Infections and How to Avoid Them",
    author: "Marry Com",
    date: "29 Jun, 2019",
    description:
      "Prenatal infections can interfere with the health of both you and your baby, so it’s important to take steps to prevent them...",
  },
  {
    image: "5.jpg",
    title: "What are the Screening Options for Heart Disease?",
    author: "Illiana Daina",
    date: "29 Jun, 2019",
    description:
      "We interview Dr Lim Siew Kuan, a general surgeon at Mount Elizabeth Novena Hospital, to understand what to expect...",
  },
  {
    image: "6.jpg",
    title: "Should You Be Worried About Microplastics?",
    author: "Tom Andrew",
    date: "29 Jun, 2019",
    description:
      "Plastic — it’s in the air, sea and probably your body. Find out what are microplastics doing to your health....",
  },
];

function SectionHeading({ small, title, light = false }) {
  return (
    <div className="text-center mb-5">
      <h6 className={`font-weight-bold ${light ? "text-white" : ""}`}>
        {small}
      </h6>
      <h3 className={`text-uppercase ${light ? "text-white" : ""}`}>
        {title}
      </h3>
      <hr className={`hr-short ${light ? "border-400" : "border-600"}`} />
    </div>
  );
}

function Navbar({ openAppointment }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top navigation */}
      <nav className="navbar navbar-expand navbar-light bg-light sticky-top font-weight-semi-bold fs--1 text-base shadow-sm">
        <div className="container">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item dropdown">
              <a
                className="btn btn-light btn-sm dropdown-toggle mr-2"
                href="#language"
                data-toggle="dropdown"
              >
                <img src={`${A}/img/illustrations/united-states.svg`} width="20" alt="English" />
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#english">EN</a>
                <a className="dropdown-item" href="#german">DE</a>
                <a className="dropdown-item" href="#arabic">AR</a>
              </div>
            </li>
            <li className="nav-item">
              <form className="input-iconic" onSubmit={(e) => e.preventDefault()}>
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
              <a className="btn btn-outline-danger btn-sm mx-2" href="#doctor">
                <span className="d-none d-md-inline">Find a </span>Doctor
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary btn-sm" onClick={openAppointment}>
                <span className="d-none d-md-inline">Request </span>Appointment
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hospital information */}
      <nav className="navbar navbar-expand-lg navbar-light bg-200 navbar-split py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={`${A}/img/logo.png`} alt="Medicare" height="30" />
          </a>

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
                    <li><a href="tel:5555551234">(555) 555-1234</a></li>
                    <li><a href="tel:5555555678">(555) 555-5678</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <button
            className="navbar-toggler ml-4"
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>

      {/* Main navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary font-weight-semi-bold py-0 fs--1">
        <div className="container">
          <div className={`collapse navbar-collapse ${mobileOpen ? "show" : ""}`}>
            <ul className="navbar-nav">
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a className="nav-link dropdown-toggle" href="#home">Home</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/">Header Slider</a>
                  <a className="dropdown-item" href="/">Header Static</a>
                  <a className="dropdown-item" href="/">Youtube Background</a>
                  <a className="dropdown-item" href="/">Self hosted Video</a>
                  <a className="dropdown-item" href="/">RTL</a>
                </div>
              </li>

              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a className="nav-link dropdown-toggle" href="#pages">Pages</a>
                <div className="dropdown-menu">
                  {pages.map(([name, path]) => (
                    <a className="dropdown-item" href={path} key={path}>
                      {name}
                    </a>
                  ))}
                </div>
              </li>

              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a className="nav-link dropdown-toggle" href="#components">Components</a>
                <div className="dropdown-menu dropdown-menu-card">
                  <div className="card navbar-dropdown-col-4 border-0">
                    <div className="card-body py-0">
                      <div className="row">
                        {[
                          componentLinks.slice(0, 9),
                          componentLinks.slice(9, 17),
                          componentLinks.slice(17, 25),
                          componentLinks.slice(25),
                        ].map((group, index) => (
                          <div className="col-6 col-sm-auto" key={index}>
                            <ul className="nav flex-column">
                              {group.map(([name, path]) => (
                                <li className="nav-item" key={path}>
                                  <a className="nav-link py-1 text-700 font-weight-medium" href={`/components/${path}`}>
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

              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a className="nav-link dropdown-toggle" href="#utilities">Utilities</a>
                <div className="dropdown-menu">
                  {utilities.map((item) => (
                    <a className="dropdown-item" href={`/utilities/${item}`} key={item}>
                      {item.replaceAll("-", " ").replace(/\b\w/g, c => c.toUpperCase())}
                    </a>
                  ))}
                </div>
              </li>

              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a className="nav-link dropdown-toggle" href="#documentation">Documentation</a>
                <div className="dropdown-menu">
                  {documentation.map(([name, path]) => (
                    <a className="dropdown-item" href={`/documentation/${path}`} key={path}>
                      {name}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

function AppointmentModal({ close }) {
  const [submitted, setSubmitted] = useState(false);

  const years = Array.from({ length: 101 }, (_, i) => 2019 - i);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className="medicare-modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Make Appointment</h5>
            <button className="close" type="button" onClick={close}>
              <span>×</span>
            </button>
          </div>

          <div className="modal-body p-4">
            {submitted ? (
              <div className="alert alert-success">
                Your appointment request has been submitted successfully.
                <button className="btn btn-primary ml-3" onClick={close}>
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputName">Patient name</label>
                    <input className="form-control" id="inputName" type="text" placeholder="Enter full name" required />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Date of birth*</label>
                    <div className="form-row">
                      <div className="col-4">
                        <select className="custom-select" required defaultValue="">
                          <option value="" disabled>DD</option>
                          {days.map(day => <option key={day}>{day}</option>)}
                        </select>
                      </div>
                      <div className="col-4">
                        <select className="custom-select" required defaultValue="">
                          <option value="" disabled>MM</option>
                          {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(month => (
                            <option key={month}>{month}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-4">
                        <select className="custom-select" required defaultValue="">
                          <option value="" disabled>YYYY</option>
                          {years.map(year => <option key={year}>{year}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputMail">Email</label>
                    <input className="form-control" id="inputMail" type="email" placeholder="Enter your email" required />
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputNumber">Contact number</label>
                    <input className="form-control" id="inputNumber" type="tel" placeholder="Contact number" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputDoc">Preferred doctor (if any)</label>
                    <input className="form-control" id="inputDoc" type="text" placeholder="Enter doctor's name" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputMedical">At the following hospital</label>
                    <select className="custom-select" id="inputMedical">
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
                    <select className="custom-select" id="inputSpecialty">
                      <option>I am not sure</option>
                      <option>Cardiology</option>
                      <option>Orthopedics</option>
                      <option>Neurology</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCode">Reference code (if any)</label>
                    <input className="form-control" id="inputCode" type="number" placeholder="Enter the code" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input className="form-control" id="inputAddress" type="text" placeholder="Apartment, studio, or floor" />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Gender</label>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input className="custom-control-input" id="male" type="radio" name="gender" value="Male" required />
                      <label className="custom-control-label" htmlFor="male">Male</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input className="custom-control-input" id="female" type="radio" name="gender" value="Female" />
                      <label className="custom-control-label" htmlFor="female">Female</label>
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputDate">Appointment date</label>
                    <input className="form-control" id="inputDate" type="date" required />
                  </div>
                </div>

                <div className="form-group">
                  <div className="custom-control custom-checkbox mb-3">
                    <input className="custom-control-input" id="terms" type="checkbox" required />
                    <label className="custom-control-label" htmlFor="terms">
                      Confirmation and I agree with terms and conditions
                    </label>
                  </div>
                </div>

                <button className="btn btn-primary" type="submit">Submit</button>
                <button className="btn btn-danger ml-2" type="button" onClick={close}>Cancel</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function HelpingPatients() {
  return (
    <section>
      <div className="container">
        <SectionHeading small="Brigham Health" title="Helping our patients" />
        <div className="row mt-6">
          <div className="col-lg-4 col-xxl-3 mb-4">
            <div className="card">
              <div className="card-header">
                <h5 className="text-uppercase mb-0">How can we help you?</h5>
              </div>
              <div className="card-body">
                {helpLinks.map(link => (
                  <div className="link-card bg-primary mb-3" key={link}>
                    <h5 className="text-white fs-0 mb-0">{link}</h5>
                    <a className="text-white stretched-link link-card-arrow" href="#help">
                      <span className="fas fa-chevron-right" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row h-100">
              {newsCards.map(card => (
                <div className="col-md-6 col-xxl-4 mb-4" key={card.title}>
                  <div className="card h-100 hvr-shadow">
                    <img className="card-img-top" src={`${A}/img/blog/${card.image}`} alt="" />
                    <div className="card-body">
                      <h5><a className="stretched-link text-decoration-none" href="/research-single">{card.title}</a></h5>
                      <p className="mb-0">{card.description}</p>
                    </div>
                    <div className="card-footer">
                      <a href="/research-single">Learn More <span className="fa-chevron-right fas ml-1" /></a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-xxl-4">
                <div className="card h-100">
                  <div className="card-header">
                    <h5 className="text-uppercase mb-0">Latest news</h5>
                  </div>
                  <div className="card-body">
                    <ul className="pl-3 mb-0">
                      {latestNews.map((news, index) => (
                        <li key={index}>
                          <a className="nav-link text-primary pl-0" href="#news">{news}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-footer">
                    <a href="#news">View more news <span className="fa-chevron-right fas ml-1" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExcellenceCenters() {
  return (
    <section className="medicare-excellence">
      <div className="bg-holder overlay overlay-primary" style={{ backgroundImage: `url('${A}/img/blog/12.jpg')` }} />
      <div className="container">
        <SectionHeading small="All Centers" title="Centers of Excellence" light />
        <div className="row">
          {excellenceCenters.map(center => (
            <div className="col-xxl-3 col-lg-4 col-md-6 mb-4" key={center}>
              <div className="link-card border border-2x border-white-25">
                <h5 className="text-white fs-0 mb-0">{center}</h5>
                <a className="text-white stretched-link link-card-arrow" href="#center">
                  <span className="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center text-center mt-4">
          <div className="col-lg-7">
            <p className="lead text-white mb-0">
              Although there is no magic formula for a long, healthy life,
              decades of research confirm certain behaviors improve your
              chances. After 43 years, The Nurses’ Health Study continues
              to find new insights for maintaining a healthy lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecentPosts() {
  return (
    <section>
      <div className="container">
        <SectionHeading small="RECENT POSTS" title="From our blog" />
        <div className="row">
          {blogPosts.map(post => (
            <div className="col-lg-6 mb-5" key={post.title}>
              <div className="row">
                <div className="col-sm-5 mb-3 mb-sm-0">
                  <a href="/blog-single">
                    <img className="img-fluid rounded" src={`${A}/img/blog/${post.image}`} alt="" />
                  </a>
                </div>
                <div className="col pr-4">
                  <h5 className="mb-1">
                    <a href="/blog-single">{post.title}</a>
                  </h5>
                  <p className="font-weight-semi-bold fs--1 mb-2">
                    <a className="text-500 text-sans-serif" href="#author">{post.author}</a>
                    <span className="fas fa-circle text-500 text-sans-serif" />
                    <a className="text-500 text-sans-serif" href="#date">{post.date}</a>
                  </p>
                  <p className="mb-0">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DonationSection() {
  return (
    <section className="pt-0">
      <div className="container">
        <div className="position-relative overflow-hidden border border-200 rounded bg-light px-sm-6 px-4 py-6 py-lg-8">
          <div
            className="bg-holder d-none d-lg-block"
            style={{
              backgroundImage: `url('${A}/img/blog/13.jpg')`,
              backgroundPosition: "right",
              backgroundSize: "50%",
            }}
          />
          <div className="row">
            <div className="col-lg-6 pr-lg-6">
              <h3>Life, Giving, Breakthroughs.</h3>
              <p className="lead">
                We are inspired by our patients’ courage, our caregivers’
                compassion, and our scientists’ curiosity—all fueled by
                our donors’ generosity.
              </p>
              <a className="btn btn-success btn-lg" href="#donate">Give Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 

          
                    


function Footer() {
  const centers = [
    "Cancer Center", "Heart & Vascular Center", "The Lung Center",
    "Neurosciences Center", "Orthopaedic & Arthritis Center",
    "Primary Care Center", "Women's Health Center",
  ];

  const departments = [
    "Anesthesiology", "Dermatology", "Emergency Medicine",
    "Medicine", "Neurology", "Neurosurgery",
    "Orthopaedic Surgery", "Obstetrics and Gynecology",
  ];

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <a className="d-block" href="/">
                <img src={`${A}/img/logo.png`} alt="Medicare" height="40" />
              </a>
              <h5 className="text-uppercase border-bottom mt-4 pb-2 mb-3 d-inline-block">
                Brigham and Women's Hospital
              </h5>
              <p className="text-uppercase mb-1">75 Francis Street, Boston MA 02115</p>
              <p className="mb-1">General information: <a href="tel:6717325500">671-732-5500</a></p>
              <p className="mb-1">New Patients: <a href="tel:8002949999">800-294-9999</a></p>
            </div>

            <div className="col-xl-8 mt-4 mt-xl-0">
              <div className="row">
                <div className="col-lg-3">
                  <h5 className="fs-0 text-uppercase border-bottom pb-2 mb-3">Centers</h5>
                  <div className="nav flex-column">
                    {centers.map(item => <a className="text-600 py-1" href="#center" key={item}>{item}</a>)}
                  </div>
                </div>

                <div className="col-lg-6 mt-4 mt-lg-0">
                  <h5 className="fs-0 text-uppercase border-bottom pb-2 mb-3">Clinical Departments</h5>
                  <div className="row no-gutters">
                    {[departments.slice(0, 5), departments.slice(5)].map((group, index) => (
                      <div className="col" key={index}>
                        <div className="nav flex-column">
                          {group.map(item => <a className="text-600 py-1" href="#department" key={item}>{item}</a>)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-lg-3 mt-4 mt-lg-0">
                  <h5 className="fs-0 text-uppercase border-bottom pb-2 mb-3">Departments</h5>
                  <div className="nav flex-column">
                    {departments.map(item => <a className="text-600 py-1" href="#department" key={item}>{item}</a>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark py-3">
        <div className="container">
          <div className="row flex-center">
            <div className="col text-center text-md-left">
              <p className="mb-0">
                Thank you for creating with medicare
                <br className="d-sm-none" />
                <span className="d-none d-sm-inline-block"> | </span>
                2026 © <a className="text-700" href="https://themewagon.com/">ThemeWagon</a>
              </p>
            </div>
            <div className="d-none d-md-block col-md-auto">
              <p className="mb-0">v1.1.0</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function Home() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <main className="main" id="top">
      <Navbar openAppointment={() => setAppointmentOpen(true)} />

      <a className="bottom-to-top rounded-soft" href="#top">
        <span className="fas fa-angle-up lg" />
      </a>

      {/* Hero section */}
      <section
        className="py-0 text-center medicare-hero"
        style={{ backgroundImage: `url('${A}/img/blog/8.jpg')` }}
      >
        <div className="container">
          <div className="row align-items-center min-vh-73 py-8 justify-content-center justify-content-md-end">
            <div className="col-auto">
              <h1 className="fs-sm-4 fs-3">
                Small Injuries May
                <br />
                Lead to Big Problem
              </h1>
              <p className="fs-sm-1 fs-0">
                Your environment could affect your fertility
              </p>
              <a className="btn btn-primary mt-4" href="#help">
                Learn More <span className="fas ml-1 fa-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social media strip */}
      <section className="bg-200 py-3">
        <div className="container">
          <div className="row flex-center text-center">
            <div className="col-md-auto">
              <h5 className="fs-0 fs-sm-1 mb-md-0 text-uppercase">
                Stay informed. connect with us.
              </h5>
            </div>
            <div className="col-md-auto mt-md-0">
              <div className="icon-group justify-content-center">
                {["facebook", "twitter", "youtube", "linkedin", "pinterest"].map(icon => (
                  <a className={`icon-item bg-white transition-base text-${icon}`} href={`#${icon}`} key={icon}>
                    <span className={`fab fa-${icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HelpingPatients />
      <ExcellenceCenters />
      <RecentPosts />
      <DonationSection />
      <ContactStrip />
      <Footer />

      {appointmentOpen && (
        <AppointmentModal close={() => setAppointmentOpen(false)} />
      )}
    </main>
  );
}
