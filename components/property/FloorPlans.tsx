export default function FloorPlans() {
  return (
    <div className="col-lg-12">
      <div className="application_statics mt30">
        <h4 className="mb30">Floor plans</h4>
        <div className="faq_according style2">
          <div className="accordion" id="accordionExample">
            <div className="card floor_plan">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <ul className="mb0">
                      <li className="list-inline-item">First Floor</li>
                      <li className="list-inline-item">
                        <p>Size:</p> <span>1267 Sqft</span>
                      </li>
                      <li className="list-inline-item">
                        <p>Rooms:</p> <span>670 Sqft</span>
                      </li>
                      <li className="list-inline-item">
                        <p>Baths:</p> <span>530 Sqft</span>
                      </li>
                      <li className="list-inline-item">
                        <p>Price:</p> <span>$1489</span>
                      </li>
                    </ul>
                  </button>
                </h2>
              </div>
              <div
                id="collapseOne"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body text-center">
                  <img
                    className="img-fluid"
                    src="/images/resource/floor_plan.png"
                    alt="floor_plan.png"
                  />
                  <p>
                    Plan description. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            <div className="card floor_plan">
              <div className="card-header active" id="headingTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <ul className="mb0">
                      <li className="list-inline-item">First Floor</li>
                      <li className="list-inline-item">
                        <p>Size:</p> <span>1267 Sqft</span>
                      </li>
                      <li className="list-inline-item">
                        <p>Rooms:</p> <span>670 Sqft</span>
                      </li>
                      <li className="list-inline-item">
                        <p>Baths:</p> <span>530 Sqft</span>
                      </li>
                      <li className="list-inline-item">
                        <p>Price:</p> <span>$1489</span>
                      </li>
                    </ul>
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse show"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body text-center">
                  <img
                    className="img-fluid"
                    src="/images/resource/floor_plan.png"
                    alt="floor_plan.png"
                  />
                  <p>
                    Plan description. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
