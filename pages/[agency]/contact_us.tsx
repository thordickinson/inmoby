import BecomePartner from "../../components/landing/BecomePartner";
import PageHeader from "../../components/landing/PageHeader";
import AgencyLayout from "../../components/layout/AgencyLayout";

export default function ContactUs() {
  return (
    <AgencyLayout>
      <PageHeader></PageHeader>
      <section className="our-contact pb90 bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="form_grid">
                <h4 className="mb5">Send Us An Email</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  gravida quis libero eleifend ornare. Maecenas mattis enim at
                  arcu feugiat, sit amet blandit nisl iaculis. Donec lacus odio,
                  malesuada eu libero sit amet, congue aliquam leo. In hac
                  habitasse platea dictumst.
                </p>
                <form
                  className="contact_form"
                  id="contact_form"
                  name="contact_form"
                  action="#"
                  method="post"
                  noValidate
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_name"
                          name="form_name"
                          className="form-control"
                          required
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_email"
                          name="form_email"
                          className="form-control required email"
                          required
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_phone"
                          name="form_phone"
                          className="form-control required phone"
                          required
                          type="phone"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_subject"
                          name="form_subject"
                          className="form-control required"
                          required
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="form_message"
                          className="form-control required"
                          rows={8}
                          required
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                      <div className="form-group mb0">
                        <button type="button" className="btn btn-lg btn-thm">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-xl-4">
              <div className="contact_localtion">
                <h4>Contact Us</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  gravida quis libero eleifend ornare. habitasse platea
                  dictumst.
                </p>
                <div className="content_list">
                  <h5>Address</h5>
                  <p>
                    2301 Ravenswood Rd Madison, <br />
                    WI 53711
                  </p>
                </div>
                <div className="content_list">
                  <h5>Phone</h5>
                  <p>(315) 905-2321</p>
                </div>
                <div className="content_list">
                  <h5>Mail</h5>
                  <p>info@findhouse.com</p>
                </div>
                <div className="content_list">
                  <h5>Skype</h5>
                  <p>findhouse.com</p>
                </div>
                <h5>Follow Us</h5>
                <ul className="contact_form_social_area">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-google"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BecomePartner></BecomePartner>
    </AgencyLayout>
  );
}
