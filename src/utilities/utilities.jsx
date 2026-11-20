
import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ContactStrip from "../components/ContactStrip.jsx";

function Utilities() {
  const { pathname } = useLocation();

  const utilityPages = [
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

  const currentPage = pathname
    .split("/")
    .filter(Boolean)
    .pop()
    .replace(".html", "")
    .toLowerCase();

  const currentIndex = utilityPages.indexOf(currentPage);

  const pageTitle =
    currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  const previousPage =
    currentIndex > 0 ? utilityPages[currentIndex - 1] : null;

  const nextPage =
    currentIndex < utilityPages.length - 1
      ? utilityPages[currentIndex + 1]
      : null;

  const renderContent = () => {
    switch (currentPage) {
      case "borders":
        return (
          <>
            <h3>Border Utilities</h3>
            <p>Examples of border styles and border properties.</p>
            <div className="border p-3 mb-3">Default Border</div>
            <div className="border border-primary p-3 mb-3">Primary Border</div>
            <div className="border border-success p-3 mb-3">Success Border</div>
            <div className="border border-danger p-3 mb-3">Danger Border</div>
            <div className="border rounded p-3">Rounded Border</div>
          </>
        );

      case "clearfix":
        return (
          <>
            <h3>Clearfix Utilities</h3>
            <p>Clearfix helps contain floated elements inside a parent.</p>
            <div className="clearfix border p-3">
              <div className="bg-primary text-white p-3 float-left">Float Left</div>
              <div className="bg-success text-white p-3 float-right">Float Right</div>
            </div>
            
          </>
        );

      case "display":
        return (
          <>
            <h3>Display Utilities</h3>
            <p>Examples of different display properties.</p>
            <div className="d-block bg-primary text-white p-2 mb-2">Display Block</div>
            <span className="d-inline bg-success text-white p-2">Display Inline</span>
            <div className="d-flex mt-3">
              <div className="bg-primary text-white p-3">Flex 1</div>
              <div className="bg-success text-white p-3">Flex 2</div>
            </div>
          </>
        );

      case "flex":
        return (
          <>
            <h3>Flex Utilities</h3>
            <p>Examples of flexbox alignment and arrangement.</p>
            <div className="d-flex justify-content-between bg-light p-3">
              <div className="bg-primary text-white p-3">Item 1</div>
              <div className="bg-success text-white p-3">Item 2</div>
              <div className="bg-danger text-white p-3">Item 3</div>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <div className="bg-primary text-white p-3">Centered Item</div>
            </div>
          </>
        );

      case "position":
        return (
          <>
            <h3>Position Utilities</h3>
            <p>Examples of position properties.</p>
            <div className="position-relative bg-light border" style={{ height: "150px" }}>
              <div className="position-absolute top-0 left-0 bg-primary text-white p-2">
                Top Left
              </div>
              <div className="position-absolute bottom-0 right-0 bg-success text-white p-2">
                Bottom Right
              </div>
            </div>
          </>
        );

      case "spacing":
        return (
          <>
            <h3>Spacing Utilities</h3>
            <p>Examples of margin and padding.</p>
            <div className="m-3 p-3 bg-primary text-white">
              Margin 3 and Padding 3
            </div>
            <div className="mt-4 p-4 bg-success text-white">
              Margin Top 4 and Padding 4
            </div>
            <div className="mx-auto p-3 bg-light border text-center">
              Centered Content
            </div>
          </>
        );

      case "sizing":
        return (
          <>
            <h3>Sizing Utilities</h3>
            <p>Examples of width and height utilities.</p>
            <div className="w-25 bg-primary text-white p-2 mb-2">Width 25%</div>
            <div className="w-50 bg-success text-white p-2 mb-2">Width 50%</div>
            <div className="w-75 bg-danger text-white p-2 mb-2">Width 75%</div>
            <div className="w-100 bg-info text-white p-2">Width 100%</div>
          </>
        );

      case "text":
        return (
          <>
            <h3>Text Utilities</h3>
            <p>Examples of text alignment, colors, and styling.</p>
            <p className="text-left">Left Aligned Text</p>
            <p className="text-center">Center Aligned Text</p>
            <p className="text-right">Right Aligned Text</p>
            <p className="text-primary">Primary Text</p>
            <p className="text-success">Success Text</p>
            <p className="font-weight-bold">Bold Text</p>
            <p className="font-italic">Italic Text</p>
          </>
        );

      case "visibility":
        return (
          <>
            <h3>Visibility Utilities</h3>
            <p>Examples of visible and hidden elements.</p>
            <div className="visible bg-primary text-white p-3 mb-3">
              Visible Element
            </div>
            <div className="invisible bg-danger text-white p-3 mb-3">
              Invisible Element (space is preserved)
            </div>
            <div className="bg-success text-white p-3">
              Another Visible Element
            </div>
          </>
        );

      default:
        return <div className="alert alert-warning">Utility page not found.</div>;
    }
  };

  return (
    <main className="main" id="top">
      <Navbar />

      <section className="bg-primary text-white py-5">
        <div className="container">
          <h2 className="text-white">Utilities</h2>
          <p className="mb-0">Medicare utility classes and examples.</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-4">
              <h4>Utilities</h4>
              <div className="list-group">
                {utilityPages.map((page) => (
                  <Link
                    key={page}
                    to={`/utilities/${page}`}
                    className={`list-group-item list-group-item-action ${
                      currentPage === page ? "active" : ""
                    }`}
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-lg-9">
              <h2 className="mb-4">{pageTitle}</h2>

              {renderContent()}

              <div className="d-flex justify-content-between mt-5">
                {previousPage ? (
                  <Link
                    className="btn btn-outline-primary"
                    to={`/utilities/${previousPage}`}
                  >
                    ← Previous
                  </Link>
                ) : (
                  <span />
                )}

                {nextPage && (
                  <Link
                    className="btn btn-primary"
                    to={`/utilities/${nextPage}`}
                  >
                    Next →
                  </Link>
                )}
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

export default Utilities;
