import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
function ContactPage() {
  const phoneNumbers = [
    ["Main Number", "555555675", "(555) 555-675"],
    ["Patient Condition Information", "555555548", "(555) 555-548"],
    ["Page Operator", "555555872", "(555) 555-872"],
    ["Emergency Department (ED)", "555555867", "(555) 555-867"],
    ["Blood Donor Center", "555555894", "(555) 555-894"],
    ["Interpreter Services", "555555098", "(555) 555-098"],
  ];

  return (
    <main className="main" id="top">
      <Navbar />

      <a className="bottom-to-top rounded-soft" href="#top" data-fancyscroll>
        <span className="fas fa-angle-up lg" />
      </a>

      <section className="text-primary">
        <div
          className="bg-holder overlay overlay-white-gradient"
          style={{
            backgroundImage: "url('/assets/img/header/3.jpg')",
          }}
        />

        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className="overflow-hidden">
                <h3>Contact</h3>
                <p className="font-weight-bold mb-0">
                  Stay touched 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>Important Phone Numbers</h3>

              <p>
                Thank you for your interest in Medicare – a teaching
                affiliate of Medical School that stands at the forefront
                of clinical care, medical research, and the training
                and education of physicians.
              </p>

              <div className="table-responsive">
                <table className="table table-borderless table-striped">
                  <thead className="bg-300">
                    <tr>
                      <th>Hospital General Information and Emergency</th>
                      <th className="white-space-nowrap">Phone Number</th>
                    </tr>
                  </thead>

                  <tbody>
                    {phoneNumbers.map((item, index) => (
                      <tr key={index}>
                        <th>{item[0]}</th>
                        <td>
                          <a href={`tel:${item[1]}`}>{item[2]}</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">
              <div
                className="radius-primary p-5 bg-200 h-100 d-flex flex-column justify-content-center"
                style={{ minHeight: "450px" }}
              >
                <div className="text-center">
                  <span className="fas fa-map-marker-alt text-primary display-3 mb-3" />

                  <h3>Medicare</h3>

                  <p className="mb-3">
                    5525 W Slauson Ave,
                    <br />
                    LA, CA 90056, USA
                  </p>

                  <a
                    className="btn btn-primary"
                    href="https://www.google.com/maps/search/?api=1&query=5525+W+Slauson+Ave+LA+CA+90056"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ContactPage;