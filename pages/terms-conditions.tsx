import BecomePartner from "../components/landing/BecomePartner";
import PageHeader from "../components/landing/PageHeader";
import AgencyLayout from "../components/layout/AgencyLayout";

export default function TermsConditions() {
  return (
    <AgencyLayout>
      <PageHeader></PageHeader>
      <section className="our-terms bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-8">
              <div className="terms_condition_grid">
                <div className="grids mb30">
                  <h4>Privacy Policy</h4>
                  <p className="mb20">
                    Curabitur massa magna, tempor in blandit id, porta in
                    ligula. Aliquam laoreet nisl massa, at interdum mauris
                    sollicitudin et. Mauris risus lectus, tristique at nisl at,
                    pharetra tristique enim.
                  </p>
                  <p>
                    Nullam this is a link nibh facilisis, at malesuada orci
                    congue. Nullam tempus sollicitudin cursus. Nulla elit
                    mauris, volutpat eu varius malesuada, pulvinar eu ligula. Ut
                    et adipiscing erat. Curabitur adipiscing erat vel libero
                    tempus congue. Nam pharetra interdum vestibulum. Aenean
                    gravida mi non aliquet porttitor. Praesent dapibus, nisi a
                    faucibus tincidunt, quam dolor condimentum metus, in
                    convallis libero ligula ut{" "}
                  </p>
                </div>
                <div className="grids mb30">
                  <h4>Our Terms</h4>
                  <p className="mb20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis mollis et sem sed sollicitudin. Donec non odio neque.
                    Aliquam hendrerit sollicitudin purus, quis rutrum mi
                    accumsan nec. Quisque bibendum orci ac nibh facilisis, at
                    malesuada orci congue. Nullam tempus sollicitudin cursus. Ut
                    et adipiscing erat. Curabitur this is a text link libero
                    tempus congue.
                  </p>
                  <p>
                    Duis mattis laoreet neque, et ornare neque sollicitudin at.
                    Proin sagittis dolor sed mi elementum pretium. Donec et
                    justo ante. Vivamus egestas sodales est, eu rhoncus urna
                    semper eu. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Integer tristique
                    elit lobortis purus bibendum, quis dictum metus mattis.
                    Phasellus posuere felis sed eros porttitor mattis. Curabitur
                    massa magna, tempor in blandit id, porta in ligula. Aliquam
                    laoreet nisl massa, at interdum mauris sollicitudin et.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4">
              <div className="terms_condition_widget">
                <h4 className="title">Navigation</h4>
                <div className="widget_list">
                  <ul className="list_details">
                    <li>
                      <a href="#">
                        <i className="fa fa-caret-right mr10"></i>Welcome Text
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-caret-right mr10"></i>Our Terms
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-caret-right mr10"></i>Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-caret-right mr10"></i>Your Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-caret-right mr10"></i>Informations
                        We Collect
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BecomePartner></BecomePartner>
    </AgencyLayout>
  );
}
