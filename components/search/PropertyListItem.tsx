export default function PropertyListItem() {
  return (
    <div className="col-lg-12">
      <div className="feat_property list">
        <div className="thumb">
          <img
            className="img-whp"
            src="/images/property/fp18.jpg"
            alt="fp18.jpg"
          />
          <div className="thmb_cntnt">
            <ul className="icon mb0">
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-transfer-1"></span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-heart"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="details">
          <div className="tc_content">
            <div className="dtls_headr">
              <ul className="tag">
                <li className="list-inline-item">
                  <a href="#">For Rent</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Featured</a>
                </li>
              </ul>
              <a className="fp_price" href="#">
                $13,000<small>/mo</small>
              </a>
            </div>
            <p className="text-thm">Apartment</p>
            <h4>House on the Hollywood</h4>
            <p>
              <span className="flaticon-placeholder"></span> 1421 San Pedro St,
              Los Angeles, CA 90015
            </p>
            <ul className="prop_details mb0">
              <li className="list-inline-item">
                <a href="#">Beds: 4</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Baths: 2</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Sq Ft: 5280</a>
              </li>
            </ul>
          </div>
          <div className="fp_footer">
            <ul className="fp_meta float-left mb0">
              <li className="list-inline-item">
                <a href="#">
                  <img src="/images/property/pposter1.png" alt="pposter1.png" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">Ali Tufan</a>
              </li>
            </ul>
            <div className="fp_pdate float-right">4 years ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}
