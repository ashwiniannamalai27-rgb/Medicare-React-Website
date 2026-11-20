
import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
 import ContactStrip from "../components/ContactStrip.jsx";

function Documentation() {
  const { pathname } = useLocation();

  const documentationPages = [
    "getting-started",
    "configuration",
    "file-structure",
    "customization",
    "gulp",
    "plugins",
    "rtl",
    "changelog",
  ];

  const currentPage = pathname
    .split("/")
    .filter(Boolean)
    .pop()
    .replace(".html", "")
    .toLowerCase();

  const currentIndex = documentationPages.indexOf(currentPage);

  const pageTitle = documentationPages[currentIndex]
    ? documentationPages[currentIndex]
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Getting Started";

  const previousPage =
    currentIndex > 0
      ? documentationPages[currentIndex - 1]
      : null;

  const nextPage =
    currentIndex >= 0 && currentIndex < documentationPages.length - 1
      ? documentationPages[currentIndex + 1]
      : null;

  const renderContent = () => {
    switch (currentPage) {
      case "getting-started":
        return (
          <>
            <h3>Getting Started</h3>
            <p>
              Welcome to the Medicare documentation. This section explains
              how to get started with the template.
            </p>
            <h4 className="mt-4">Installation</h4>
            <p>
              Download the template files and extract them into your project
              directory.
            </p>
            <h4 className="mt-4">Requirements</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
            </ul>
          </>
        );

      case "configuration":
        return (
          <>
            <h3>Configuration</h3>
            <p>
              Configure the website according to your project requirements.
            </p>
            <h4 className="mt-4">Website Configuration</h4>
            <p>
              Update the website title, logo, navigation links, and other
              settings as needed.
            </p>
          </>
        );

      case "file-structure":
        return (
          <>
            <h3>File Structure</h3>
            <p>The project files are organized into the following folders.</p>
            <pre className="bg-light p-3 border rounded">
{`medicare/
├── assets/
│   ├── css/
│   ├── js/
│   ├── img/
│   └── vendors/
├── index.html
├── about.html
└── contact.html`}
            </pre>
          </>
        );

      case "customization":
        return (
          <>
            <h3>Customization</h3>
            <p>
              Customize the template by changing colors, fonts, images,
              logos, and website content.
            </p>
            <h4 className="mt-4">Changing Colors</h4>
            <p>
              Modify the CSS variables or styles to change the appearance
              of the website.
            </p>
          </>
        );

      case "plugins":
        return (
          <>
            <h3>Plugins</h3>
            <p>
              The template uses external libraries and plugins to provide
              additional functionality.
            </p>
            <ul>
              <li>Bootstrap</li>
              <li>Font Awesome</li>
              <li>jQuery</li>
              <li>Popper.js</li>
            </ul>
          </>
        );
case "gulp":
  return (
    <>
      <h3>Gulp</h3>

      <p>
        Gulp is a JavaScript task runner used to automate repetitive
        development tasks such as compiling stylesheets, optimizing
        images, and managing project assets.
      </p>

      <h4 className="mt-4">Installing Gulp</h4>
      <p>
        Make sure Node.js and npm are installed on your system.
        Then install Gulp CLI globally using the following command.
      </p>

      <pre className="bg-light p-3 border rounded">
        <code>npm install --global gulp-cli</code>
      </pre>

      <h4 className="mt-4">Installing Project Dependencies</h4>
      <p>
        Open your project directory in the terminal and install
        the required dependencies.
      </p>

      <pre className="bg-light p-3 border rounded">
        <code>npm install</code>
      </pre>

      <h4 className="mt-4">Gulp Configuration</h4>
      <p>
        Gulp tasks are configured inside a file named gulpfile.js.
        This file defines the tasks that automate the development
        workflow.
      </p>

      <pre className="bg-light p-3 border rounded">
        <code>{`const gulp = require("gulp");

gulp.task("default", function (done) {
  console.log("Gulp is running!");
  done();
});`}</code>
      </pre>

      <h4 className="mt-4">Running Gulp</h4>
      <p>
        Run the default Gulp task from your terminal using:
      </p>

      <pre className="bg-light p-3 border rounded">
        <code>gulp</code>
      </pre>

      <div className="alert alert-info mt-4">
        Gulp is used for automating build tasks. It is separate
        from React and Vite, which manage your current React
        development workflow.
      </div>
    </>
  );
      case "rtl":
        return (
          <>
            <h3>RTL Support</h3>
            <p>
              RTL support allows the website layout to display languages
              that are written from right to left.
            </p>
            <p>
              Set the direction attribute to rtl in the HTML element
              when using an RTL layout.
            </p>
            <pre className="bg-light p-3 border rounded">
{`<html lang="ar" dir="rtl">`}
            </pre>
          </>
        );

      case "changelog":
        return (
          <>
            <h3>Changelog</h3>
            <h4 className="mt-4">Version 1.1.0</h4>
            <ul>
              <li>Updated template components.</li>
              <li>Improved responsive layout.</li>
              <li>Fixed minor styling issues.</li>
            </ul>
          </>
        );

      default:
        return (
          <div className="alert alert-warning">
            Documentation page not found.
          </div>
        );
    }
  };

  return (
    <main className="main" id="top">
      <Navbar />

      <section className="bg-primary text-white py-5">
        <div className="container">
          <h2 className="text-white">Documentation</h2>
          <p className="mb-0">
            Medicare documentation and customization guide.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">

            {/* LEFT DOCUMENTATION LIST */}
            <div className="col-lg-3 mb-4">
              <div className="border rounded shadow-sm p-3">
                <h4 className="mb-3">Documentation</h4>

                <div className="list-group">
                  {documentationPages.map((page) => {
                    const title = page
                      .split("-")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ");

                    return (
                      <Link
                        key={page}
                        to={`/documentation/${page}`}
                        className={`list-group-item list-group-item-action ${
                          currentPage === page ? "active" : ""
                        }`}
                      >
                        {title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT DOCUMENTATION CONTENT */}
            <div className="col-lg-9">
              <div className="border rounded shadow-sm p-4">
                <h2 className="mb-4">{pageTitle}</h2>

                {renderContent()}

                <div className="d-flex justify-content-between mt-5">
                  {previousPage ? (
                    <Link
                      className="btn btn-outline-primary"
                      to={`/documentation/${previousPage}`}
                    >
                      ← Previous
                    </Link>
                  ) : (
                    <span />
                  )}

                  {nextPage && (
                    <Link
                      className="btn btn-primary"
                      to={`/documentation/${nextPage}`}
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

export default Documentation;
