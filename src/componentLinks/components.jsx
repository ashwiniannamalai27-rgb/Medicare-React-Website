
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ContactStrip from "../components/ContactStrip.jsx";
function Components() {
  const { pathname } = useLocation();

  const [activeTab, setActiveTab] = useState("home");
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(60);

React.useEffect(() => {
  if (countdown <= 0) return;

  const timer = setInterval(() => {
    setCountdown((previous) => previous - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [countdown]);

  const componentPages = [
    "alerts",
    "accordion",
    "background",
    "badges",
    "breadcrumbs",
    "buttons",
    "cards",
    "colors",
    "dropdowns",
    "forms",
    "grid",
    "icons",
    "images",
    "modals",
    "navbar",
    "pagination",
    "popovers",
    "progress",
    "scroll",
    "spinners",
    "tables",
    "tabs",
    "tooltips",
    "typography",
    "animations",
    "carousel",
    "countdown",
    "google-maps",
  ];

  const currentPage = pathname
    .split("/")
    .filter(Boolean)
    .pop()
    .replace(".html", "")
    .toLowerCase();

  const currentIndex = componentPages.indexOf(currentPage);

  const pageTitle = currentPage
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  const previousPage =
    currentIndex > 0
      ? componentPages[currentIndex - 1]
      : null;

  const nextPage =
    currentIndex >= 0 && currentIndex < componentPages.length - 1
      ? componentPages[currentIndex + 1]
      : null;

  const renderContent = () => {
    switch (currentPage) {

      case "alerts":
        return (
          <>
            <h3>Alert Examples</h3>
            <p>
              Alerts provide contextual feedback messages for typical user actions.
            </p>

            <div className="alert alert-primary">Primary alert message</div>
            <div className="alert alert-secondary">Secondary alert message</div>
            <div className="alert alert-success">Success alert message</div>
            <div className="alert alert-danger">Danger alert message</div>
            <div className="alert alert-warning">Warning alert message</div>
            <div className="alert alert-info">Information alert message</div>
          </>
        );

      case "accordion":
        return (
          <>
            <h3>Accordion Examples</h3>
            <p>
              Accordions allow users to expand and collapse sections of content.
            </p>

            {[
              "First Accordion",
              "Second Accordion",
              "Third Accordion",
            ].map((item, index) => (
              <div className="card mb-2" key={item}>
                <div className="card-header">
                  <button
                    className="btn btn-link"
                    onClick={() =>
                      setActiveTab(
                        activeTab === String(index)
                          ? ""
                          : String(index)
                      )
                    }
                  >
                    {item}
                  </button>
                </div>

                {activeTab === String(index) && (
                  <div className="card-body">
                    This is the content of {item.toLowerCase()}.
                  </div>
                )}
              </div>
            ))}
          </>
        );

      case "background":
        return (
          <>
            <h3>Background Examples</h3>
            <p>Different background colors available in Bootstrap.</p>

            <div className="bg-primary text-white p-4 mb-2">
              Primary Background
            </div>
            <div className="bg-secondary text-white p-4 mb-2">
              Secondary Background
            </div>
            <div className="bg-success text-white p-4 mb-2">
              Success Background
            </div>
            <div className="bg-danger text-white p-4 mb-2">
              Danger Background
            </div>
            <div className="bg-light text-dark p-4 mb-2">
              Light Background
            </div>
            <div className="bg-dark text-white p-4">
              Dark Background
            </div>
          </>
        );

      case "badges":
        return (
          <>
            <h3>Badge Examples</h3>
            <p>Badges are used to display small status indicators and labels.</p>

            <span className="badge badge-primary mr-2">Primary</span>
            <span className="badge badge-secondary mr-2">Secondary</span>
            <span className="badge badge-success mr-2">Success</span>
            <span className="badge badge-danger mr-2">Danger</span>
            <span className="badge badge-warning mr-2">Warning</span>
            <span className="badge badge-info">Info</span>
          </>
        );

      case "breadcrumbs":
        return (
          <>
            <h3>Breadcrumb Examples</h3>
            <p>
              Breadcrumbs indicate the current page location within a website.
            </p>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/components/alerts">Components</Link>
                </li>
                <li className="breadcrumb-item active">
                  Breadcrumbs
                </li>
              </ol>
            </nav>
          </>
        );

      case "buttons":
        return (
          <>
            <h3>Button Examples</h3>
            <p>Bootstrap provides different button styles and colors.</p>

            <div className="mb-3">
              <button className="btn btn-primary mr-2 mb-2">Primary</button>
              <button className="btn btn-secondary mr-2 mb-2">Secondary</button>
              <button className="btn btn-success mr-2 mb-2">Success</button>
              <button className="btn btn-danger mr-2 mb-2">Danger</button>
              <button className="btn btn-warning mr-2 mb-2">Warning</button>
              <button className="btn btn-info mb-2">Info</button>
            </div>

            <h5>Outline Buttons</h5>

            <button className="btn btn-outline-primary mr-2">
              Primary
            </button>
            <button className="btn btn-outline-secondary">
              Secondary
            </button>
          </>
        );

      case "cards":
        return (
          <>
            <h3>Card Examples</h3>
            <p>
              Cards are flexible content containers with different elements.
            </p>

            <div className="card shadow-sm" style={{ maxWidth: "350px" }}>
              <div className="card-body">
                <h5 className="card-title">Medicare Card</h5>
                <p className="card-text">
                  This is an example of a Bootstrap card component.
                </p>
                <button className="btn btn-primary">
                  Learn More
                </button>
              </div>
            </div>
          </>
        );

      case "colors":
        return (
          <>
            <h3>Color Examples</h3>
            <p>Bootstrap theme colors can be used for backgrounds and text.</p>

            {[
              "primary",
              "secondary",
              "success",
              "danger",
              "warning",
              "info",
              "dark",
            ].map((color) => (
              <div className="mb-2" key={color}>
                <div className={`bg-${color} text-white p-3`}>
                  {color.toUpperCase()}
                </div>
              </div>
            ))}
          </>
        );

      case "dropdowns":
        return (
          <>
            <h3>Dropdown Examples</h3>
            <p>
              Dropdown menus display a list of options when clicked.
            </p>

            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                onClick={() =>
                  setActiveTab(
                    activeTab === "dropdown" ? "" : "dropdown"
                  )
                }
              >
                Dropdown Menu
              </button>

              {activeTab === "dropdown" && (
                <div className="dropdown-menu show">
                  <a className="dropdown-item" href="#item1">
                    Action
                  </a>
                  <a className="dropdown-item" href="#item2">
                    Another Action
                  </a>
                  <a className="dropdown-item" href="#item3">
                    Something Else
                  </a>
                </div>
              )}
            </div>
          </>
        );

      case "forms":
        return (
          <>
            <h3>Form Examples</h3>
            <p>Forms collect information from website visitors.</p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" rows="4" />
              </div>

              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </>
        );

      case "grid":
        return (
          <>
            <h3>Grid Examples</h3>
            <p>
              Bootstrap grid divides a page into responsive columns.
            </p>

            <div className="row text-center">
              <div className="col-md-4 bg-primary text-white p-4">
                Column 1
              </div>
              <div className="col-md-4 bg-success text-white p-4">
                Column 2
              </div>
              <div className="col-md-4 bg-danger text-white p-4">
                Column 3
              </div>
            </div>
          </>
        );

      case "icons":
        return (
          <>
            <h3>Icon Examples</h3>
            <p>Medicare icon examples using Bootstrap Icons.</p>

            <div className="d-flex align-items-center flex-wrap">
              <i className="bi bi-heart-pulse fs-2 mr-4" />
              <i className="bi bi-hospital fs-2 mr-4" />
              <i className="bi bi-calendar-check fs-2" />
            </div>

            <p className="mt-3">
              Heart, hospital, and calendar icons.
            </p>
          </>
        );

      case "images":
        return (
          <>
            <h3>Image Examples</h3>
            <p>
              Images can be displayed with responsive sizing and rounded corners.
            </p>

            <img
              src="/assets/img/logo.png"
              alt="Hospital"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "450px" }}
            />
          </>
        );

      case "modals":
        return (
          <>
            <h3>Modal Examples</h3>
            <p>
              Modals display content in a dialog box above the main page.
            </p>

            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              Open Modal
            </button>

            {showModal && (
              <div
                className="modal d-block"
                tabIndex="-1"
                role="dialog"
                style={{ background: "rgba(0,0,0,0.5)" }}
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Example Modal</h5>

                      <button
                        className="close"
                        onClick={() => setShowModal(false)}
                        aria-label="Close"
                      >
                        <span>&times;</span>
                      </button>
                    </div>

                    <div className="modal-body">
                      This is an example modal window.
                    </div>

                    <div className="modal-footer">
                      <button
                        className="btn btn-secondary"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        );

      case "navbar":
        return (
          <>
            <h3>Navbar Examples</h3>
            <p>
              Navigation bars provide links to different website sections.
            </p>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">
                Medicare
              </Link>

              <div className="navbar-nav">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </div>
            </nav>
          </>
        );

      case "pagination":
        return (
          <>
            <h3>Pagination Examples</h3>
            <p>
              Pagination divides content into multiple pages.
            </p>

            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#previous">
                    Previous
                  </a>
                </li>

                {[1, 2, 3, 4].map((n) => (
                  <li
                    className={`page-item ${n === 1 ? "active" : ""}`}
                    key={n}
                  >
                    <a className="page-link" href={`#page${n}`}>
                      {n}
                    </a>
                  </li>
                ))}

                <li className="page-item">
                  <a className="page-link" href="#next">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </>
        );

      case "popovers":
        return (
          <>
            <h3>Popover Examples</h3>
            <p>
              Popovers display additional information when activated.
            </p>

            <button
              className="btn btn-primary"
              onClick={() =>
                setActiveTab(
                  activeTab === "popover" ? "" : "popover"
                )
              }
            >
              Toggle Popover
            </button>

            {activeTab === "popover" && (
              <div
                className="card shadow-sm mt-3"
                style={{ maxWidth: "250px" }}
              >
                <div className="card-body">
                  This is a sample popover.
                </div>
              </div>
            )}
          </>
        );

      case "progress":
        return (
          <>
            <h3>Progress Examples</h3>
            <p>
              Progress bars show the completion status of a task.
            </p>

            {[25, 50, 75, 100].map((value) => (
              <div className="progress mb-3" key={value}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${value}%` }}
                  aria-valuenow={value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {value}%
                </div>
              </div>
            ))}
          </>
        );

      case "scroll":
        return (
          <>
            <h3>Scroll Examples</h3>
            <p>Scroll down inside this example container.</p>

            <div
              className="border p-3"
              style={{ height: "180px", overflowY: "auto" }}
            >
              {Array.from({ length: 12 }, (_, i) => (
                <p key={i}>
                  Scrollable example content {i + 1}
                </p>
              ))}
            </div>
          </>
        );

      case "spinners":
        return (
          <>
            <h3>Spinner Examples</h3>
            <p>
              Spinners indicate that a process is loading.
            </p>

            <div className="spinner-border text-primary mr-3" role="status">
              <span className="sr-only">Loading...</span>
            </div>

            <div className="spinner-border text-success mr-3" role="status">
              <span className="sr-only">Loading...</span>
            </div>

            <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </>
        );

      case "tables":
        return (
          <>
            <h3>Table Examples</h3>
            <p>
              Tables organize information into rows and columns.
            </p>

            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Doctor A</td>
                    <td>Cardiology</td>
                    <td>Available</td>
                  </tr>

                  <tr>
                    <td>Doctor B</td>
                    <td>Neurology</td>
                    <td>Busy</td>
                  </tr>

                  <tr>
                    <td>Doctor C</td>
                    <td>General</td>
                    <td>Available</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );

      case "tabs":
        return (
          <>
            <h3>Tabs Examples</h3>
            <p>
              Tabs organize related content into separate panels.
            </p>

            <ul className="nav nav-tabs">
              {["home", "profile", "contact"].map((tab) => (
                <li className="nav-item" key={tab}>
                  <button
                    type="button"
                    className={`nav-link ${
                      activeTab === tab ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                </li>
              ))}
            </ul>

            <div className="border p-4">
              {activeTab === "home" && "Home tab content"}
              {activeTab === "profile" && "Profile tab content"}
              {activeTab === "contact" && "Contact tab content"}
            </div>
          </>
        );

      case "tooltips":
        return (
          <>
            <h3>Tooltip Examples</h3>
            <p>
              Tooltips provide additional information when users hover over an element.
            </p>

            <button
              className="btn btn-primary"
              title="This is a sample tooltip"
            >
              Hover over me
            </button>
          </>
        );

      case "typography":
        return (
          <>
            <h3>Typography Examples</h3>
            <p>
              Typography examples demonstrate different heading and text styles.
            </p>

            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>

            <p>This is an example paragraph.</p>
            <p className="font-weight-bold">Bold text example.</p>
            <p className="font-italic">Italic text example.</p>
          </>
        );

      case "animations":
        return (
          <>
            <h3>Animation Examples</h3>
            <p>
              Animations can add movement and visual feedback to interface elements.
            </p>

            <div className="alert alert-primary">
              Animation demonstration area.
            </div>

            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </>
        );

      case "carousel":
        return (
          <>
            <h3>Carousel Examples</h3>
            <p>
              A carousel displays content in a sequence of slides.
            </p>

            <div className="card p-5 text-center">
              <h4>Medicare Carousel</h4>

              <p>Sample carousel slide content.</p>

              <div>
                <button
                  className="btn btn-outline-primary mr-2"
                  onClick={() => setActiveTab("slide1")}
                >
                  Slide 1
                </button>

                <button
                  className="btn btn-outline-primary"
                  onClick={() => setActiveTab("slide2")}
                >
                  Slide 2
                </button>
              </div>

              <p className="mt-3">
                {activeTab === "slide2"
                  ? "Second slide"
                  : "First slide"}
              </p>
            </div>
          </>
        );

      case "countdown":
  return (
    <>
      <h3>Countdown Examples</h3>
      <p>Countdown timer demonstration.</p>

      <div className="bg-light p-4 text-center rounded">
        <h2 className="mb-3">
          {String(Math.floor(countdown / 3600)).padStart(2, "0")} :
          {" "}
          {String(Math.floor((countdown % 3600) / 60)).padStart(2, "0")} :
          {" "}
          {String(countdown % 60).padStart(2, "0")}
        </h2>

        <p>Time Remaining</p>

        <button
          className="btn btn-primary mr-2"
          onClick={() => setCountdown(60)}
        >
          Start 1 Minute
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => setCountdown(0)}
        >
          Reset
        </button>
      </div>
    </>
  );

      
case "google-maps":
  return (
    <>
      <h3>Google Maps Examples</h3>
      <p>
        Google Maps can be embedded to display geographical locations.
      </p>

      <div className="bg-light border rounded p-3 text-center">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.078444634388!2d-118.3789149!3d33.9905188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b759ad032f35%3A0xdc73447ad76446d!2s5525%20W%20Slauson%20Ave%2C%20Los%20Angeles%2C%20CA%2090056%2C%20USA!5e0!3m2!1sen!2sin!4v1795111216970!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Google Maps demonstration"
          ></iframe>
        </div>

        <p className="mt-3 mb-0">
          Connect a Google Maps embed to display a real map.
        </p>
      </div>
    </>
  );


      default:
        return (
          <div className="alert alert-warning">
            Component page not found.
          </div>
        );
    }
  };

  return (
    <main className="main" id="top">
      <Navbar />

      {/* PAGE HEADER */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <h2 className="text-white">Components</h2>
          <p className="mb-0">
            Explore Medicare UI components and examples.
          </p>
        </div>
      </section>

      {/* COMPONENTS CONTENT */}
      <section className="py-5">
        <div className="container">
          <div className="row">

            {/* LEFT COMPONENT LIST */}
            <div className="col-lg-3 mb-4">
              <div className="border rounded shadow-sm p-3">
                <h4 className="mb-3">Components</h4>

                <div className="list-group">
                  {componentPages.map((page) => (
                    <Link
                      key={page}
                      to={`/components/${page}`}
                      className={`list-group-item list-group-item-action ${
                        currentPage === page ? "active" : ""
                      }`}
                    >
                      {page
                        .split("-")
                        .map(
                          (word) =>
                            word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COMPONENT CONTENT */}
            <div className="col-lg-9">
              <div className="border rounded shadow-sm p-4">

                <h2 className="mb-4">{pageTitle}</h2>

                {renderContent()}

                {/* PREVIOUS AND NEXT BUTTONS */}
                <div className="d-flex justify-content-between mt-5">

                  {previousPage ? (
                    <Link
                      className="btn btn-outline-primary"
                      to={`/components/${previousPage}`}
                    >
                      ← Previous
                    </Link>
                  ) : (
                    <span />
                  )}

                  {nextPage && (
                    <Link
                      className="btn btn-primary"
                      to={`/components/${nextPage}`}
                    >
                      Next →
                    </Link>
                  )}

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <ContactStrip/>
      <Footer />
    </main>
  );
}

export default Components;
