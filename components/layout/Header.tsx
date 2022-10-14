import { Agency } from "../../model/agency";

interface MenuItem {
  label: string;
  link: string;
}

interface HeaderParams {
  agency?: Agency;
}

const items: MenuItem[] = [
  { label: "Inicio", link: "" },
  { label: "Buscar", link: "search" },
  { label: "Contacto", link: "contact_us" },
  { label: "A Cerca de", link: "about" },
];

function createMenu(agencyKey: string | undefined) {
  const base = agencyKey ? `/${agencyKey}` : "";
  return items.map((i) => ({
    label: i.label,
    link: `${base}/${i.link}`,
  }));
}

export default function Header({ agency }: HeaderParams) {
  const currentAgency = agency;
  const menu = createMenu(agency?.key);
  return (
    <header className="header-nav menu_style_home_one style2 navbar-scrolltofixed stricky main-menu">
      <div className="container-fluid p0">
        <nav>
          <div className="menu-toggle">
            <img
              className="nav_logo_img img-fluid"
              src="/images/header-logo.png"
              alt="header-logo.png"
            />
            <button type="button" id="menu-btn">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <a
            href={`/${agency?.key}`}
            className="navbar_brand float-left dn-smd"
          >
            <img
              className="logo1 img-fluid"
              src="/images/header-logo2.png"
              alt="header-logo.png"
            />
            <img
              className="logo2 img-fluid"
              src="/images/header-logo2.png"
              alt="header-logo2.png"
            />
            <span>FindHouse</span>
          </a>
          <ul
            id="respMenu"
            className="ace-responsive-menu text-right"
            data-menu-style="horizontal"
          >
            {menu.map((i) => (
              <li key={i.link}>
                <a href={i.link}>
                  <span className="title">{i.label}</span>
                </a>
              </li>
            ))}
            <li className="list-inline-item list_s">
              <a
                href="#"
                className="btn flaticon-user"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                {" "}
                <span className="dn-lg">Login/Register</span>
              </a>
            </li>
            <li className="list-inline-item add_listing home2">
              <a href="#">
                <span className="flaticon-plus"></span>
                <span className="dn-lg"> Create Listing</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function OldHeader() {
  /* Main Header Nav */
  return (
    <>
      {/* Main Header Nav */}
      <header className="header-nav menu_style_home_one navbar-scrolltofixed stricky main-menu">
        <div className="container-fluid p0">
          {/* Ace Responsive Menu */}
          <nav>
            {/* Menu Toggle btn*/}
            <div className="menu-toggle">
              <img
                className="nav_logo_img img-fluid"
                src="/images/header-logo.png"
                alt="header-logo.png"
              />
              <button type="button" id="menu-btn">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <a href="#" className="navbar_brand float-left dn-smd">
              <img
                className="logo1 img-fluid"
                src="/images/header-logo.png"
                alt="header-logo.png "
              />
              <img
                className="/logo2 img-fluid"
                src="/images/header-logo2.png"
                alt="header-logo2.png "
              />
              <span>FindHouse</span>
            </a>
            {/* Responsive Menu Structure*/}
            {/*Note: declare the Menu style in the data-menu-style="horizontal" (options: horizontal, vertical, accordion) */}
            <ul
              id="respMenu"
              className="ace-responsive-menu text-right"
              data-menu-style="horizontal"
            >
              <li>
                <a href="#">
                  <span className="title">Home</span>
                </a>
                {/* Level Two*/}
                <ul>
                  <li>
                    <a href="index.html">Home 1</a>
                  </li>
                  <li>
                    <a href="index2.html">Home 2</a>
                  </li>
                  <li>
                    <a href="index3.html">Home 3</a>
                  </li>
                  <li>
                    <a href="index4.html">Home 4</a>
                  </li>
                  <li>
                    <a href="index5.html">Home 5</a>
                  </li>
                  <li>
                    <a href="index6.html">Home 6</a>
                  </li>
                  <li>
                    <a href="index7.html">Home 7</a>
                  </li>
                  <li>
                    <a href="index8.html">Home 8</a>
                  </li>
                  <li>
                    <a href="index9.html">Home 9</a>
                  </li>
                  <li>
                    <a href="index10.html">Home 10</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <span className="title">Listing</span>
                </a>
                {/* Level Two*/}
                <ul>
                  <li>
                    <a href="#">Listing Grid</a>
                    {/* Level Three*/}
                    <ul>
                      <li>
                        <a href="page-listing-grid-v1.html">Grid v1</a>
                      </li>
                      <li>
                        <a href="page-listing-grid-v2.html">Grid v2</a>
                      </li>
                      <li>
                        <a href="page-listing-grid-v3.html">Grid v3</a>
                      </li>
                      <li>
                        <a href="page-listing-grid-v4.html">Grid v4</a>
                      </li>
                      <li>
                        <a href="page-listing-grid-v5.html">Grid v5</a>
                      </li>
                      <li>
                        <a href="page-listing-full-width-grid.html">
                          Grid Fullwidth
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Listing List</a>
                    {/* Level Three*/}
                    <ul>
                      <li>
                        <a href="page-listing-list.html">List V1</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Listing Style</a>
                    {/* Level Three*/}
                    <ul>
                      <li>
                        <a href="page-listing-parallax.html">Parallax Style</a>
                      </li>
                      <li>
                        <a href="page-listing-slider.html">Slider Style</a>
                      </li>
                      <li>
                        <a href="page-listing-map.html">Map Header</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Listing Half</a>
                    {/* Level Three*/}
                    <ul>
                      <li>
                        <a href="page-listing-half-map-v1.html">Map V1</a>
                      </li>
                      <li>
                        <a href="page-listing-half-map-v2.html">Map V2</a>
                      </li>
                      <li>
                        <a href="page-listing-half-map-v3.html">Map V3</a>
                      </li>
                      <li>
                        <a href="page-listing-half-map-v4.html">Map V4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Agent View</a>
                    {/* Level Three*/}
                    <ul>
                      <li>
                        <a href="page-listing-agent-v1.html">Agent V1</a>
                      </li>
                      <li>
                        <a href="page-listing-agent-v2.html">Agent V2</a>
                      </li>
                      <li>
                        <a href="page-listing-agent-v3.html">Agent Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Agencies View</a>
                    {/* Level Three*/}
                    <ul>
                      <li>
                        <a href="page-listing-agencies-v1.html">Agencies V1</a>
                      </li>
                      <li>
                        <a href="page-listing-agencies-v2.html">Agencies V2</a>
                      </li>
                      <li>
                        <a href="page-listing-agencies-v3.html">
                          Agencies Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-add-new-property.html">Create Listing</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <span className="title">Property</span>
                </a>
                <ul>
                  <li>
                    <a href="#">User Admin</a>
                    <ul>
                      <li>
                        <a href="page-dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="page-my-properties.html">My Properties</a>
                      </li>
                      <li>
                        <a href="page-message.html">My Message</a>
                      </li>
                      <li>
                        <a href="page-my-review.html">My Review</a>
                      </li>
                      <li>
                        <a href="page-my-favorites.html">My Favorites</a>
                      </li>
                      <li>
                        <a href="page-add-new-property.html">Add Property</a>
                      </li>
                      <li>
                        <a href="page-my-profile.html">My Profile</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Listing Single</a>
                    {/* Level Three*/}
                    <ul>
                      <li>
                        <a href="page-listing-single-v1.html">Single V1</a>
                      </li>
                      <li>
                        <a href="page-listing-single-v2.html">Single V2</a>
                      </li>
                      <li>
                        <a href="page-listing-single-v3.html">Single V3</a>
                      </li>
                      <li>
                        <a href="page-listing-single-v4.html">Single V4</a>
                      </li>
                      <li>
                        <a href="page-listing-single-v5.html">Single V5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-add-new-property.html">Create Listing</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <span className="title">Pages</span>
                </a>
                <ul>
                  <li>
                    <a href="#">
                      <span className="title">Pages</span>
                    </a>
                    <ul>
                      <li>
                        <a href="page-shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="page-shop-single.html">Shop Single</a>
                      </li>
                      <li>
                        <a href="page-shop-cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="page-shop-checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="page-shop-order.html">Order</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-about.html">About Us</a>
                  </li>
                  <li>
                    <a href="page-gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="page-faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="page-login.html">LogIn</a>
                  </li>
                  <li>
                    <a href="page-compare.html">Membership</a>
                  </li>
                  <li>
                    <a href="page-compare2.html">Membership 2</a>
                  </li>
                  <li>
                    <a href="page-register.html">Register</a>
                  </li>
                  <li>
                    <a href="page-service.html">Service</a>
                  </li>
                  <li>
                    <a href="page-error.html">404 Page</a>
                  </li>
                  <li>
                    <a href="page-terms.html">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="page-ui-element.html">UI Elements</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <span className="title">Blog</span>
                </a>
                <ul>
                  <li>
                    <a href="page-blog-v1.html">Blog List 1</a>
                  </li>
                  <li>
                    <a href="page-blog-grid.html">Blog List 2</a>
                  </li>
                  <li>
                    <a href="page-blog-single.html">Single Post</a>
                  </li>
                </ul>
              </li>
              <li className="last">
                <a href="page-contact.html">
                  <span className="title">Contact</span>
                </a>
              </li>
              <li className="list-inline-item list_s">
                <a
                  href="#"
                  className="btn flaticon-user"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                >
                  {" "}
                  <span className="dn-lg">Login/Register</span>
                </a>
              </li>
              <li className="list-inline-item add_listing">
                <a href="page-add-new-property.html">
                  <span className="flaticon-plus"></span>
                  <span className="dn-lg"> Create Listing</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Modal */}
      <div
        className="sign_up_modal modal fade bd-example-modal-lg"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body container pb20">
              <div className="row">
                <div className="col-lg-12">
                  <ul
                    className="sign_up_tab nav nav-tabs"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content container" id="myTabContent">
                <div
                  className="row mt25 tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="col-lg-6 col-xl-6">
                    <div className="login_thumb">
                      <img
                        className="img-fluid w100"
                        src="/images/resource/login.jpg"
                        alt="login.jpg "
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6">
                    <div className="login_form">
                      <form action="#">
                        <div className="heading">
                          <h4>Login</h4>
                        </div>
                        <div className="row mt25">
                          <div className="col-lg-12">
                            <button
                              type="submit"
                              className="btn btn-fb btn-block"
                            >
                              <i className="fa fa-facebook float-left mt5"></i>{" "}
                              Login with Facebook
                            </button>
                          </div>
                          <div className="col-lg-12">
                            <button
                              type="submit"
                              className="btn btn-googl btn-block"
                            >
                              <i className="fa fa-google float-left mt5"></i>{" "}
                              Login with Google
                            </button>
                          </div>
                        </div>
                        <hr />
                        <div className="input-group mb-2 mr-sm-2">
                          <input
                            type="text"
                            className="form-control"
                            id="inlineFormInputGroupUsername2"
                            placeholder="User Name Or Email "
                          />
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="flaticon-user"></i>
                            </div>
                          </div>
                        </div>
                        <div className="input-group form-group">
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password "
                          />
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="flaticon-password"></i>
                            </div>
                          </div>
                        </div>
                        <div className="form-group custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="exampleCheck1 "
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="exampleCheck1"
                          >
                            Remember me
                          </label>
                          <a className="btn-fpswd float-right" href="#">
                            Lost your password?
                          </a>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-log btn-block btn-thm"
                        >
                          Log In
                        </button>
                        <p className="text-center">
                          Don't have an account?{" "}
                          <a className="text-thm" href="#">
                            Register
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="row mt25 tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="col-lg-6 col-xl-6">
                    <div className="regstr_thumb">
                      <img
                        className="img-fluid w100"
                        src="/images/resource/regstr.jpg"
                        alt="regstr.jpg "
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6">
                    <div className="sign_up_form">
                      <div className="heading">
                        <h4>Register</h4>
                      </div>
                      <form action="#">
                        <div className="row">
                          <div className="col-lg-12">
                            <button
                              type="submit"
                              className="btn btn-block btn-fb"
                            >
                              <i className="fa fa-facebook float-left mt5"></i>{" "}
                              Login with Facebook
                            </button>
                          </div>
                          <div className="col-lg-12">
                            <button
                              type="submit"
                              className="btn btn-block btn-googl"
                            >
                              <i className="fa fa-google float-left mt5"></i>{" "}
                              Login with Google
                            </button>
                          </div>
                        </div>
                        <hr />
                        <div className="form-group input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputName"
                            placeholder="User Name "
                          />
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="flaticon-user"></i>
                            </div>
                          </div>
                        </div>
                        <div className="form-group input-group">
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail2"
                            placeholder="Email "
                          />
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fa fa-envelope-o"></i>
                            </div>
                          </div>
                        </div>
                        <div className="form-group input-group">
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword2"
                            placeholder="Password "
                          />
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="flaticon-password"></i>
                            </div>
                          </div>
                        </div>
                        <div className="form-group input-group">
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword3"
                            placeholder="Re-enter password "
                          />
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="flaticon-password"></i>
                            </div>
                          </div>
                        </div>
                        <div className="form-group ui_kit_select_search mb0">
                          <select
                            className="selectpicker"
                            data-live-search="true"
                            data-width="100%"
                          >
                            <option data-tokens="SelectRole">
                              Single User
                            </option>
                            <option data-tokens="Agent/Agency">Agent</option>
                            <option data-tokens="SingleUser">Multi User</option>
                          </select>
                        </div>
                        <div className="form-group custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="exampleCheck2 "
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="exampleCheck2"
                          >
                            I have read and accept the Terms and Privacy Policy?
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-log btn-block btn-thm"
                        >
                          Sign Up
                        </button>
                        <p className="text-center">
                          Already have an account?{" "}
                          <a className="text-thm" href="#">
                            Log In
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Nav For Mobile */}
      <div id="page" className="stylehome1 h0">
        <div className="mobile-menu">
          <div className="header stylehome1">
            <div className="main_logo_home2 text-center">
              <img
                className="nav_logo_img img-fluid mt20"
                src="/images/header-logo2.png"
                alt="header-logo2.png "
              />
              <span className="mt20">FindHouse</span>
            </div>
            <ul className="menu_bar_home2">
              <li className="list-inline-item list_s">
                <a href="page-register.html">
                  <span className="flaticon-user"></span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#menu">
                  <span></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.mobile-menu */}
        <nav id="menu" className="stylehome1">
          <ul>
            <li>
              <span>Home</span>
              <ul>
                <li>
                  <a href="index.html">Home 1</a>
                </li>
                <li>
                  <a href="index2.html">Home 2</a>
                </li>
                <li>
                  <a href="index3.html">Home 3</a>
                </li>
                <li>
                  <a href="index4.html">Home 4</a>
                </li>
                <li>
                  <a href="index5.html">Home 5</a>
                </li>
                <li>
                  <a href="index6.html">Home 6</a>
                </li>
                <li>
                  <a href="index7.html">Home 7</a>
                </li>
                <li>
                  <a href="index8.html">Home 8</a>
                </li>
                <li>
                  <a href="index9.html">Home 9</a>
                </li>
                <li>
                  <a href="index10.html">Home 10</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Listing</span>
              <ul>
                <li>
                  <span>Listing Grid</span>
                  <ul>
                    <li>
                      <a href="page-listing-grid-v1.html">Grid v1</a>
                    </li>
                    <li>
                      <a href="page-listing-grid-v2.html">Grid v2</a>
                    </li>
                    <li>
                      <a href="page-listing-grid-v3.html">Grid v3</a>
                    </li>
                    <li>
                      <a href="page-listing-grid-v4.html">Grid v4</a>
                    </li>
                    <li>
                      <a href="page-listing-grid-v5.html">Grid v5</a>
                    </li>
                    <li>
                      <a href="page-listing-full-width-grid.html">
                        Grid Fullwidth
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Listing Style</span>
                  <ul>
                    <li>
                      <a href="page-listing-parallax.html">Parallax Style</a>
                    </li>
                    <li>
                      <a href="page-listing-slider.html">Slider Style</a>
                    </li>
                    <li>
                      <a href="page-listing-map.html">Map Header</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Listing Half</span>
                  <ul>
                    <li>
                      <a href="page-listing-half-map-v1.html">Map V1</a>
                    </li>
                    <li>
                      <a href="page-listing-half-map-v2.html">Map V2</a>
                    </li>
                    <li>
                      <a href="page-listing-half-map-v3.html">Map V3</a>
                    </li>
                    <li>
                      <a href="page-listing-half-map-v4.html">Map V4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Agent View</span>
                  <ul>
                    <li>
                      <a href="page-listing-agent-v1.html">Agent V1</a>
                    </li>
                    <li>
                      <a href="page-listing-agent-v2.html">Agent V2</a>
                    </li>
                    <li>
                      <a href="page-listing-agent-v3.html">Agent Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Agencies View</span>
                  <ul>
                    <li>
                      <a href="page-agencies-list-v1.html">Agencies V1</a>
                    </li>
                    <li>
                      <a href="page-agencies-list-v2.html">Agencies V2</a>
                    </li>
                    <li>
                      <a href="page-agencies-list-v3.html">Agencies Details</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <span>Property</span>
              <ul>
                <li>
                  <span>Property</span>
                  <ul>
                    <li>
                      <a href="page-dashboard.html">Dashboard</a>
                    </li>
                    <li>
                      <a href="page-my-properties.html">My Properties</a>
                    </li>
                    <li>
                      <a href="page-add-new-property.html">Add New Property</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Listing Single</span>
                  <ul>
                    <li>
                      <a href="page-listing-single-v1.html">Single V1</a>
                    </li>
                    <li>
                      <a href="page-listing-single-v2.html">Single V2</a>
                    </li>
                    <li>
                      <a href="page-listing-single-v3.html">Single V3</a>
                    </li>
                    <li>
                      <a href="page-listing-single-v4.html">Single V4</a>
                    </li>
                    <li>
                      <a href="page-listing-single-v5.html">Single V5</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <span>Blog</span>
              <ul>
                <li>
                  <a href="page-blog-v1.html">Blog List 1</a>
                </li>
                <li>
                  <a href="page-blog-grid.html">Blog List 2</a>
                </li>
                <li>
                  <a href="page-blog-single.html">Single Post</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Pages</span>
              <ul>
                <li>
                  <span>Shop</span>
                  <ul>
                    <li>
                      <a href="page-shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="page-shop-single.html">Shop Single</a>
                    </li>
                    <li>
                      <a href="page-shop-cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="page-shop-checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="page-shop-order.html">Order</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="page-about.html">About Us</a>
                </li>
                <li>
                  <a href="page-gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="page-faq.html">Faq</a>
                </li>
                <li>
                  <a href="page-login.html">LogIn</a>
                </li>
                <li>
                  <a href="page-compare.html">Membership</a>
                </li>
                <li>
                  <a href="page-compare2.html">Membership 2</a>
                </li>
                <li>
                  <a href="page-register.html">Register</a>
                </li>
                <li>
                  <a href="page-service.html">Service</a>
                </li>
                <li>
                  <a href="page-error.html">404 Page</a>
                </li>
                <li>
                  <a href="page-terms.html">Terms and Conditions</a>
                </li>
                <li>
                  <a href="page-ui-element.html">UI Elements</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="page-contact.html">Contact</a>
            </li>
            <li>
              <a href="page-login.html">
                <span className="flaticon-user"></span> Login
              </a>
            </li>
            <li>
              <a href="page-register.html">
                <span className="flaticon-edit"></span> Register
              </a>
            </li>
            <li className="cl_btn">
              <a className="btn btn-block btn-lg btn-thm circle" href="#">
                <span className="flaticon-plus"></span> Create Listing
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
