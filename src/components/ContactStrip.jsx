
function ContactStrip() {
  return (
    <section className="bg-primary py-3">
      <div className="container">
        <div className="row align-items-center justify-content-center text-white">

          {/* Phone */}
          <div className="col-lg-4 col-md-6 mb-3 mb-lg-0">
            <div className="d-flex align-items-center justify-content-center">
              <img src="/assets/img/icons/customer-service.png" alt="" width="32" />
              <div className="ml-3">
                <a className="text-white fs-0 font-weight-semi-bold d-block" href="tel:12345678910">
                  +(123) 456 78910
                </a>
                <p className="fs--2 mb-0">Have a question? Call us now</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-lg-4 col-md-6 mb-3 mb-lg-0">
            <div className="d-flex align-items-center justify-content-center">
              <img src="/assets/img/icons/mail-5.png" alt="" width="38" />
              <div className="ml-3">
                <a className="text-white fs-0 font-weight-semi-bold d-block" href="mailto:help@medicare.com">
                  help@medicare.com
                </a>
                <p className="fs--2 mb-0">Need support? Drop us an email</p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center justify-content-center">
              <img src="/assets/img/icons/clock-2.png" alt="" width="38" />
              <div className="ml-3">
                <p className="fs-0 font-weight-semi-bold mb-0">
                  Mon – Sat 07:00 – 21:00
                </p>
                <p className="fs--2 mb-0">We are open on</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactStrip;
