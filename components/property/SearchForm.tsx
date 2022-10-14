export default function SearchForm() {
  return (
    <div className="sidebar_listing_list">
      <div className="sidebar_advanced_search_widget">
        <ul className="sasw_list mb0">
          <li className="search_area">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                placeholder="keyword"
              />
              <label htmlFor="exampleInputEmail">
                <span className="flaticon-magnifying-glass"></span>
              </label>
            </div>
          </li>
          <li className="search_area">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail"
                placeholder="Location"
              />
              <label htmlFor="exampleInputEmail">
                <span className="flaticon-maps-and-flags"></span>
              </label>
            </div>
          </li>
          <li>
            <div className="search_option_two">
              <div className="candidate_revew_select">
                <select className="selectpicker w100 show-tick">
                  <option>Status</option>
                  <option>Apartment</option>
                  <option>Bungalow</option>
                  <option>Condo</option>
                  <option>House</option>
                  <option>Land</option>
                  <option>Single Family</option>
                </select>
              </div>
            </div>
          </li>
          <li>
            <div className="search_option_two">
              <div className="candidate_revew_select">
                <select className="selectpicker w100 show-tick">
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>Bungalow</option>
                  <option>Condo</option>
                  <option>House</option>
                  <option>Land</option>
                  <option>Single Family</option>
                </select>
              </div>
            </div>
          </li>
          <li>
            <div className="small_dropdown2">
              <div id="prncgs2" className="btn dd_btn">
                <span>Price</span>
                <label htmlFor="exampleInputEmail2">
                  <span className="fa fa-angle-down"></span>
                </label>
              </div>
              <div className="dd_content2">
                <div className="pricing_acontent">
                  <span id="slider-range-value1"></span>
                  <span className="mt0" id="slider-range-value2"></span>
                  <div id="slider"></div>
                  <input type="text" className="amount" placeholder="$52,239" />
                  <input
                    type="text"
                    className="amount2"
                    placeholder="$985,14"
                  />
                  <div className="slider-range"></div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="search_option_two">
              <div className="candidate_revew_select">
                <select className="selectpicker w100 show-tick">
                  <option>Bathrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
            </div>
          </li>
          <li>
            <div className="search_option_two">
              <div className="candidate_revew_select">
                <select className="selectpicker w100 show-tick">
                  <option>Bedrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
            </div>
          </li>
          <li>
            <div className="search_option_two">
              <div className="candidate_revew_select">
                <select className="selectpicker w100 show-tick">
                  <option>Garages</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Others</option>
                </select>
              </div>
            </div>
          </li>
          <li>
            <div className="search_option_two">
              <div className="candidate_revew_select">
                <select className="selectpicker w100 show-tick">
                  <option>Year built</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                </select>
              </div>
            </div>
          </li>
          <li className="min_area list-inline-item">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputName2"
                placeholder="Min Area"
              />
            </div>
          </li>
          <li className="max_area list-inline-item">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputName3"
                placeholder="Max Area"
              />
            </div>
          </li>
          <li>
            <div id="accordion" className="panel-group">
              <div className="panel">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      href="#panelBodyRating"
                      className="accordion-toggle link"
                      data-toggle="collapse"
                      data-parent="#accordion"
                    >
                      <i className="flaticon-more"></i> Advanced features
                    </a>
                  </h4>
                </div>
                <div id="panelBodyRating" className="panel-collapse collapse">
                  <div className="panel-body row">
                    <div className="col-lg-12">
                      <ul className="ui_kit_checkbox selectable-list float-left fn-400">
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck16"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck16"
                            >
                              Air Conditioning
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck17"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck17"
                            >
                              Barbeque
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck18"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck18"
                            >
                              Gym
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck19"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck19"
                            >
                              Microwave
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck20"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck20"
                            >
                              TV Cable
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck21"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck21"
                            >
                              Lawn
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck22"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck22"
                            >
                              Refrigerator
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck23"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck23"
                            >
                              Swimming Pool
                            </label>
                          </div>
                        </li>
                      </ul>
                      <ul className="ui_kit_checkbox selectable-list float-right fn-400">
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck24"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck24"
                            >
                              WiFi
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck25"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck25"
                            >
                              Sauna
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck26"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck26"
                            >
                              Dryer
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck27"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck27"
                            >
                              Washer
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck28"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck28"
                            >
                              Laundry
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck29"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck29"
                            >
                              Outdoor Shower
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck30"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck30"
                            >
                              Window Coverings
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="search_option_button">
              <button type="submit" className="btn btn-block btn-thm">
                Search
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
