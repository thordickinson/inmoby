import React from "react";

const CarouselItemStyle: React.CSSProperties = {
  width: "338px",
  marginRight: "15px",
};
const OwlStage = {
  transform: "translate3d(-706px, 0px, 0px)",
  transition: "all 0s ease 0s",
  width: "2118px",
};

export default function PropertyGridItem() {
  const featuredLink = "";
  return (
    <div className="feat_property">
      <div className="thumb">
        <img className="img-whp" src="/images/property/fp1.jpg" alt="fp1.jpg" />
        <div className="thmb_cntnt">
          <ul className="tag mb0">
            <li className="list-inline-item">
              <a href="#">For Rent</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Featured</a>
            </li>
          </ul>
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
          <a className="fp_price" href="#">
            $13,000<small>/mo</small>
          </a>
        </div>
      </div>
      <div className="details">
        <div className="tc_content">
          <p className="text-thm">Apartment</p>
          <h4>Renovated Apartment</h4>
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
  );
}