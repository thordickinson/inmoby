export default function ContactForm() {
  return (
    <div className="sidebar_listing_list">
      <div className="sidebar_advanced_search_widget">
        <div className="sl_creator">
          <h4 className="mb25">Listed By</h4>
          <div className="media">
            <img className="mr-3" src="/images/team/lc1.png" alt="lc1.png" />
            <div className="media-body">
              <h5 className="mt-0 mb0">Samul Williams</h5>
              <p className="mb0">(123)456-7890</p>
              <p className="mb0">info@findhouse.com</p>
              <a className="text-thm" href="#">
                View My Listing
              </a>
            </div>
          </div>
        </div>
        <ul className="sasw_list mb0">
          <li className="search_area">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                placeholder="Your Name"
              />
            </div>
          </li>
          <li className="search_area">
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="exampleInputName2"
                placeholder="Phone"
              />
            </div>
          </li>
          <li className="search_area">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail"
                placeholder="Email"
              />
            </div>
          </li>
          <li className="search_area">
            <div className="form-group">
              <textarea
                id="form_message"
                name="form_message"
                className="form-control required"
                rows={5}
                required
                placeholder="I'm interest in [ Listing Single ]"
              ></textarea>
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
