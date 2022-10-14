import WhyChooseUs from "./landing/WhyChooseUs";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="main-title text-center">
              <h2 className="mt0">Our Mission Is To FindHouse</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-xl-7">
            <div className="about_content">
              <p className="large">
                Mauris ac consectetur ante, dapibus gravida tellus. Nullam
                aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia
                tempor.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                quis ligula eu lectus vulputate porttitor sed feugiat nunc.
                Mauris ac consectetur ante, dapibus gravida tellus. Nullam
                aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia
                tempor, lectus orci elementum augue, eget auctor metus ante sit
                amet velit.
              </p>
              <p>
                Maecenas quis viverra metus, et efficitur ligula. Nam congue
                augue et ex congue, sed luctus lectus congue. Integer convallis
                condimentum sem. Duis elementum tortor eget condimentum tempor.
                Praesent sollicitudin lectus ut pharetra pulvinar. Donec et
                libero ligula. Vivamus semper at orci at placerat.Placeat Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Quod libero
                amet, laborum qui nulla quae alias tempora.
              </p>
              <ul className="ab_counting">
                <li className="list-inline-item">
                  <div className="about_counting">
                    <div className="icon">
                      <span className="flaticon-user"></span>
                    </div>
                    <div className="details">
                      <h3>80,123</h3>
                      <p>Customers to date</p>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="about_counting">
                    <div className="icon">
                      <span className="flaticon-home"></span>
                    </div>
                    <div className="details">
                      <h3>$74 Billion</h3>
                      <p>In home sales</p>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="about_counting">
                    <div className="icon">
                      <span className="flaticon-transfer"></span>
                    </div>
                    <div className="details">
                      <h3>$468 Million</h3>
                      <p>In Savings</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-xl-5">
            <div className="about_thumb">
              <img
                className="img-fluid w100"
                src="/images/about/1.jpg"
                alt="1.jpg"
              />
              <a
                className="popup-iframe popup-youtube color-white"
                href="https://www.youtube.com/watch?v=R7xbhKIiw4Y"
              >
                <i className="flaticon-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs></WhyChooseUs>
    </section>
  );
}
