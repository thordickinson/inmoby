export default function Video() {
  return (
    <div className="col-lg-12">
      <div className="shop_single_tab_content style2 mt30">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="description-tab"
              data-toggle="tab"
              href="#description"
              role="tab"
              aria-controls="description"
              aria-selected="true"
            >
              Property video
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="listing-tab"
              data-toggle="tab"
              href="#listing"
              role="tab"
              aria-controls="listing"
              aria-selected="false"
            >
              Virtual Tour
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent2">
          <div
            className="tab-pane fade show active"
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <div className="property_video">
              <div className="thumb">
                <img
                  className="pro_img img-fluid w100"
                  src="/images/background/7.jpg"
                  alt="7.jpg"
                />
                <div className="overlay_icon">
                  <a
                    className="video_popup_btn red popup-youtube"
                    href="https://www.youtube.com/watch?v=oqNZOOWF8qM"
                  >
                    <span className="flaticon-play"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
            id="listing"
            role="tabpanel"
            aria-labelledby="listing-tab"
          >
            <div className="property_video">
              <div className="thumb">
                <img
                  className="pro_img img-fluid w100"
                  src="/images/background/7.jpg"
                  alt="7.jpg"
                />
                <div className="overlay_icon">
                  <a
                    className="video_popup_btn red popup-youtube"
                    href="https://www.youtube.com/watch?v=oqNZOOWF8qM"
                  >
                    <span className="flaticon-play"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
