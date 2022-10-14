export default function WalkScore() {
  return (
    <div className="col-lg-12">
      <div className="walkscore_area mt30">
        <h4 className="mb30">
          Walkscore{" "}
          <span className="float-right">
            <img src="/images/resource/wscore.png" alt="wscore.png" />
          </span>
        </h4>
        <div className="iba_container">
          <div className="icon_box_area">
            <div className="score">
              <span>70</span>
            </div>
            <div className="details">
              <h5>Walk Score</h5>
              <p>Somewhat Walkable</p>
            </div>
          </div>
          <div className="icon_box_area">
            <div className="score">
              <span>40</span>
            </div>
            <div className="details">
              <h5>Bike Score</h5>
              <p>Bikeable</p>
            </div>
          </div>
        </div>
        <a className="more_info" href="#">
          More Details Here
        </a>
      </div>
    </div>
  );
}
