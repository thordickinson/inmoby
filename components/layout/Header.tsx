import { useContext } from "react";
import { AgencyContext } from "../../common/contexts";
import { Theme, ThemeContext } from "../../common/theme";
import { Agency } from "../../model/agency";

interface MenuItem {
  label: string;
  link: string;
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

export default function Header() {
  const agency: Agency = useContext(AgencyContext);
  const theme: Theme = useContext(ThemeContext);
  const menu = createMenu(agency?.key);
  const primary = theme.getPrimaryColor();
  const shine = primary.clone().setAlpha(0.3).toHexString();
  const boxShadow = `0px 1px 4px 0px ${shine}`;
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
            <img className="logo1" src={agency.logoUrl} alt="header-logo.png" />
            <span>{agency.name}</span>
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
            <li
              className="list-inline-item add_listing home2"
              style={{ backgroundColor: primary.toHexString(), boxShadow }}
            >
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
