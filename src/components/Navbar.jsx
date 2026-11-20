
import { useState } from "react";
import { Link } from "react-router-dom";

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
  ["Alerts", "alerts"],
  ["Background", "background"],
  ["Badges", "badges"],
  ["Breadcrumbs", "breadcrumbs"],
  ["Buttons", "buttons"],
  ["Cards", "cards"],
  ["Colors", "colors"],
  ["Dropdowns", "dropdowns"],
  ["Forms", "forms"],
  ["Grid", "grid"],
  ["Icons", "icons"],
  ["Images", "images"],
  ["Modals", "modals"],
  ["Navbar", "navbar"],
  ["Pagination", "pagination"],
  ["Progress", "progress"],
  ["Scroll", "scroll"],
  ["Spinners", "spinners"],
  ["Tables", "tables"],
  ["Tabs", "tabs"],
  ["Tooltips", "tooltips"],
  ["Typography", "typography"],
  ["Animations", "animations"],
  ["Carousel", "carousel"],
  ["Countdown", "countdown"],
  ["Google Maps", "google-maps"],
];

const utilities = [
  "borders",
  "clearfix",
  "display",
  "flex",
  "position",
  "spacing",
  "sizing",
  "text",
  "visibility",
];

const documentation = [
  ["Getting Started", "getting-started"],
  ["Configuration", "configuration"],
  ["File Structure", "file-structure"],
  ["Customization", "customization"],
  ["Gulp", "gulp"],
  ["Plugins", "plugins"],
  ["RTL", "RTL"],
];

function Navbar({ openAppointment }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const languages = [
    ["EN", "English"],
    ["DE", "German"],
    ["AR", "Arabic"],
  ];

  return (
    <>
      {/* Top navigation */}
      <nav className="navbar navbar-expand navbar-light bg-light sticky-top font-weight-semi-bold fs--1 text-base shadow-sm">
        <div className="container">
          <ul className="navbar-nav align-items-center">

            {/* Language dropdown */}
            <li className="nav-item dropdown mr-2">
              <button
                type="button"
                className="btn btn-light btn-sm dropdown-toggle"
                onClick={() => setLanguageOpen(!languageOpen)}
                aria-expanded={languageOpen}
              >
                <img
                  src="/assets/img/illustrations/united-states.svg"
                  width="20"
                  alt="Language"
                />
                <span className="ml-1">{selectedLanguage}</span>
              </button>

              {languageOpen && (
                <div className="dropdown-menu show">
                  {languages.map(([code, name]) => (
                    <button
                      type="button"
                      className="dropdown-item"
                      key={code}
                      onClick={() => {
                        setSelectedLanguage(code);
                        setLanguageOpen(false);
                      }}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </li>

            {/* Search */}
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
                href="#doctor"
              >
                <span className="d-none d-md-inline">Find a </span>
                Doctor
              </a>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-primary btn-sm"
                onClick={openAppointment}
              >
                <span className="d-none d-md-inline">Request </span>
                Appointment
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hospital information */}
      <nav className="navbar navbar-expand-lg navbar-light bg-200 navbar-split py-3">
        <div className="container">
          <Link
            className="navbar-brand d-flex align-items-center"
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
                  <h5 className="fs-0 mb-1">Phone Appointment</h5>

                  <ul className="nav flex-column fs--1">
                    <li>
                      <a href="tel:5555551234">(555) 555-1234</a>
                    </li>
                    <li>
                      <a href="tel:5555555678">(555) 555-5678</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="navbar-toggler ml-4"
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>

      {/* Main navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary font-weight-semi-bold py-0 fs--1">
        <div className="container">
          <div
            className={`collapse navbar-collapse ${
              mobileOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav">

              {/* Home */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                >
                  Home
                </Link>

                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/">
                    Header Slider
                  </Link>

                  <a className="dropdown-item" href="/index-static">
                    Header Static
                  </a>

                  <a className="dropdown-item" href="/index-youtube">
                    Youtube Background
                  </a>

                  <a className="dropdown-item" href="/index-selfhosted">
                    Self hosted Video
                  </a>

                  <a className="dropdown-item" href="/index-rtl">
                    RTL
                  </a>
                </div>
              </li>

              {/* Pages */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <a className="nav-link dropdown-toggle" href="#pages">
                  Pages
                </a>

                <div className="dropdown-menu">
                  {pages.map(([name, path]) => (
                    <Link
                      className="dropdown-item"
                      to={path}
                      key={path}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </li>

              {/* Components */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/components/alerts"
                >
                  Components
                </Link>

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
                                  <Link
                                    className="nav-link py-1 text-700 font-weight-medium"
                                    to={`/components/${path}`}
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

              {/* Utilities */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/utilities/borders"
                >
                  Utilities
                </Link>

                <div className="dropdown-menu">
                  {utilities.map((item) => (
                    <Link
                      className="dropdown-item"
                      to={`/utilities/${item}`}
                      key={item}
                    >
                      {item
                        .replaceAll("-", " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </Link>
                  ))}
                </div>
              </li>

              {/* Documentation */}
              <li className="nav-item dropdown dropdown-menu-on-hover">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/documentation/getting-started"
                >
                  Documentation
                </Link>

                <div className="dropdown-menu">
                  {documentation.map(([name, path]) => (
                    <Link
                      className="dropdown-item"
                      to={`/documentation/${path}`}
                      key={path}
                    >
                      {name}
                    </Link>
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

export default Navbar;
