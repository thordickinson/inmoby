export default function PaymentCalculator() {
  return (
    <div className="col-lg-12">
      <div className="application_statics">
        <div className="row">
          <div className="col-lg-12">
            <div className="chart_circle_doughnut mt30">
              <h4>Payment Calculator</h4>
              <canvas className="mt50 mb50" id="myChart"></canvas>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <select
                className="selectpicker"
                data-live-search="true"
                data-width="100%"
              >
                <option data-tokens="Terms">Terms</option>
                <option data-tokens="Terms2">Terms2</option>
                <option data-tokens="Terms3">Terms3</option>
                <option data-tokens="Terms4">Terms4</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input form-group">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleWebsite"
                placeholder="Interest"
              />
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input form-group">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleFaceBook"
                placeholder="Home Price"
              />
            </div>
          </div>
          <div className="col-lg-6 col-xl-4">
            <div className="my_profile_setting_input form-group">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleTwitter"
                placeholder="Down Payment"
              />
            </div>
          </div>
          <div className="col-lg-6 col-xl-2">
            <div className="my_profile_setting_input form-group">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleLinkedin"
                placeholder="10%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
