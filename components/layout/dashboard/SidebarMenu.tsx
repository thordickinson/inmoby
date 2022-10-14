export default function SideBarMenu() {
  return (
    <div className="dashboard_sidebar_menu dn-992">
      <ul className="sidebar-menu">
        <li className="title">
          <span>Main</span>
        </li>
        <li className="treeview">
          <a href="page-dashboard.html">
            <i className="flaticon-layers"></i>
            <span> Dashboard</span>
          </a>
        </li>
        <li className="treeview">
          <a href="page-message.html">
            <i className="flaticon-envelope"></i>
            <span> Message</span>
          </a>
        </li>
        <li className="title">
          <span>Manage Listings</span>
        </li>
        <li className="treeview">
          <a href="page-my-properties.html">
            <i className="flaticon-home"></i> <span>My Properties</span>
            <i className="fa fa-angle-down pull-right"></i>
          </a>
          <ul className="treeview-menu">
            <li>
              <a href="#">
                <i className="fa fa-circle"></i> General Elements
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-circle"></i> Advanced Elements
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-circle"></i> Editors
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="page-my-favorites.html">
            <i className="flaticon-heart"></i> <span> My Favorites</span>
          </a>
        </li>
        <li>
          <a href="page-my-savesearch.html">
            <i className="flaticon-magnifying-glass"></i>{" "}
            <span>Saved Search</span>
          </a>
        </li>
        <li className="treeview">
          <a href="page-my-review.html">
            <i className="flaticon-chat"></i>
            <span> Reviews</span>
            <i className="fa fa-angle-down pull-right"></i>
          </a>
          <ul className="treeview-menu">
            <li>
              <a href="#">
                <i className="fa fa-circle"></i> My Reviews
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-circle"></i> Visitor Reviews
              </a>
            </li>
          </ul>
        </li>
        <li className="title">
          <span>Manage Account</span>
        </li>
        <li>
          <a href="page-my-packages.html">
            <i className="flaticon-box"></i> <span>My Package</span>
          </a>
        </li>
        <li>
          <a href="page-my-profile.html">
            <i className="flaticon-user"></i> <span>My Profile</span>
          </a>
        </li>
        <li>
          <a href="page-login.html">
            <i className="flaticon-logout"></i> <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
