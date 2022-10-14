export default function ResultHeader() {
  return (
    <div className="row">
      <div className="grid_list_search_result">
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-5">
          <div className="left_area tac-xsd">
            <p>9 Search results</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8 col-xl-7">
          <div className="right_area text-right tac-xsd">
            <ul>
              <li className="list-inline-item">
                <span className="stts">Status:</span>
                <select className="selectpicker show-tick">
                  <option>All Status</option>
                  <option>Recent</option>
                  <option>Old Review</option>
                </select>
              </li>
              <li className="list-inline-item">
                <span className="shrtby">Sort by:</span>
                <select className="selectpicker show-tick">
                  <option>Featured First</option>
                  <option>Featured 2nd</option>
                  <option>Featured 3rd</option>
                  <option>Featured 4th</option>
                  <option>Featured 5th</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
