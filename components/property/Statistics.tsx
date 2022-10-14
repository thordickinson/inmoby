export default function Statistics() {
  return (
    <div className="col-lg-12">
      <div className="application_statics shop_single_tab_content style3 mt30">
        <ul
          className="nav nav-tabs float-right fn-414"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="hourly-tab"
              data-toggle="tab"
              href="#hourly"
              role="tab"
              aria-controls="hourly"
              aria-selected="true"
            >
              Hours
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="weekly-tab"
              data-toggle="tab"
              href="#weekly"
              role="tab"
              aria-controls="weekly"
              aria-selected="false"
            >
              Weekly
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="monthly-tab"
              data-toggle="tab"
              href="#monthly"
              role="tab"
              aria-controls="monthly"
              aria-selected="false"
            >
              Monthly
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent2">
          <div
            className="tab-pane fade show active"
            id="hourly"
            role="tabpanel"
            aria-labelledby="hourly-tab"
          >
            <h4 className="mt10-414">Property Views</h4>
            <canvas id="myChartweave" width="100%" height="50"></canvas>
          </div>
          <div
            className="tab-pane fade"
            id="weekly"
            role="tabpanel"
            aria-labelledby="weekly-tab"
          >
            <h4 className="mt10-414">Property Views</h4>
            <div className="c_container w100"></div>
          </div>
          <div
            className="tab-pane fade"
            id="monthly"
            role="tabpanel"
            aria-labelledby="monthly-tab"
          >
            <h4 className="mt10-414">Property Views</h4>
            <canvas className="ls_barchart" id="chart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
