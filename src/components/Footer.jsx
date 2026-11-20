
import React from "react";

const A = "/assets";


function Footer() {
  const centers = [
    "Cancer Center",
    "Heart & Vascular Center",
    "The Lung Center",
    "Neurosciences Center",
    "Orthopaedic & Arthritis Center",
    "Primary Care Center",
    "Women's Health Center",
  ];

  const departments = [
    "Anesthesiology",
    "Dermatology",
    "Emergency Medicine",
    "Medicine",
    "Neurology",
    "Neurosurgery",
    "Orthopaedic Surgery",
    "Obstetrics and Gynecology",
  ];

  return (
    <>
    
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <a className="d-block" href="/">
                <img src={`${A}/img/logo.png`} alt="Medicare" height="40" />
              </a>

              <h5 className="text-uppercase border-bottom mt-4 pb-2 mb-3 d-inline-block">
                Brigham and Women's Hospital
              </h5>

              <p className="text-uppercase mb-1">
                75 Francis Street, Boston MA 02115
              </p>

              <p className="mb-1">
                General information:{" "}
                <a href="tel:6717325500">671-732-5500</a>
              </p>

              <p className="mb-1">
                New Patients:{" "}
                <a href="tel:8002949999">800-294-9999</a>
              </p>
            </div>

            <div className="col-xl-8 mt-4 mt-xl-0">
              <div className="row">
                <div className="col-lg-3">
                  <h5 className="fs-0 text-uppercase border-bottom pb-2 mb-3">
                    Centers
                  </h5>

                  <div className="nav flex-column">
                    {centers.map((item) => (
                      <a
                        className="text-600 py-1"
                        href="#center"
                        key={item}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="col-lg-6 mt-4 mt-lg-0">
                  <h5 className="fs-0 text-uppercase border-bottom pb-2 mb-3">
                    Clinical Departments
                  </h5>

                  <div className="row">
                    {[departments.slice(0, 5), departments.slice(5)].map(
                      (group, index) => (
                        <div className="col" key={index}>
                          <div className="nav flex-column">
                            {group.map((item) => (
                              <a
                                className="text-600 py-1"
                                href="#department"
                                key={item}
                              >
                                {item}
                              </a>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="col-lg-3 mt-4 mt-lg-0">
                  <h5 className="fs-0 text-uppercase border-bottom pb-2 mb-3">
                    Departments
                  </h5>

                  <div className="nav flex-column">
                    {departments.map((item) => (
                      <a
                        className="text-600 py-1"
                        href="#department"
                        key={item}
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

      <footer className="bg-dark py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col text-center text-md-start">
              <p className="mb-0">
                Thank you for creating with medicare
                <br className="d-sm-none" />
                <span className="d-none d-sm-inline-block"> | </span>
                2026 ©{" "}
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
    </>
  );
}

export default Footer;
