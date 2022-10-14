export default function FeaturedSidebarElement() {
  return (
    <div className="item">
      <div className="feat_property home7 agent">
        <div className="thumb">
          <img
            className="img-whp"
            src="/images/property/fp1.jpg"
            alt="fp1.jpg"
          />
          <div className="thmb_cntnt">
            <ul className="tag mb0">
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
            <h4 className="posr color-white">Renovated Apartment</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
