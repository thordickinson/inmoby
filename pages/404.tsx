import AgencyLayout from "../components/layout/AgencyLayout";

export default function FourOhFour() {
  return (
    <AgencyLayout>
      <section className="our-error bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center">
              <div className="error_page footer_apps_widget">
                <img
                  className="img-fluid"
                  src="/images/resource/error.png"
                  alt="error.png"
                />
                <div className="erro_code">
                  <h1>Ohh! Page Not Found</h1>
                </div>
                <p>We can’t seem to find the page you’re looking for</p>
                <form className="form-inline mailchimp_form">
                  <label className="sr-only" htmlFor="inlineFormInputName">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="inlineFormInputName"
                    placeholder="Search"
                  />
                  <button type="submit" className="btn btn-primary mb-2">
                    <span className="flaticon-magnifying-glass"></span>
                  </button>
                </form>
              </div>
              <a className="btn btn_error btn-thm" href="index.html">
                Back To Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </AgencyLayout>
  );
}
