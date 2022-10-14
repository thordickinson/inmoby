export default function Location() {
  return (
    <div className="col-lg-12">
      <div className="application_statics mt30">
        <h4 className="mb30">
          Location{" "}
          <small className="float-right">
            1421 San Pedro St, Los Angeles, CA 90015
          </small>
        </h4>
        <div className="property_video p0">
          <div className="thumb">
            <div className="h400" id="map-canvas"></div>
            <div className="overlay_icon">
              <a href="#">
                <img
                  className="map_img_icon"
                  src="/images/header-logo.png"
                  alt="header-logo.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
