export default function Description() {
  return (
    <div className="col-lg-12">
      <div className="listing_single_description">
        <div className="lsd_list">
          <ul className="mb0">
            <li className="list-inline-item">
              <a href="#">Apartment</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Beds: 4</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Baths: 2</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Sq Ft: 5280</a>
            </li>
          </ul>
        </div>
        <h4 className="mb30">Description</h4>
        <p className="mb25">
          Evans Tower very high demand corner junior one bedroom plus a large
          balcony boasting full open NYC views. You need to see the views to
          believe them. Mint condition with new hardwood floors. Lots of closets
          plus washer and dryer.
        </p>
        <p className="gpara second_para white_goverlay mt10 mb10">
          Fully furnished. Elegantly appointed condominium unit situated on
          premier location. PS6. The wide entry hall leads to a large living
          room with dining area. This expansive 2 bedroom and 2 renovated marble
          bathroom apartment has great windows. Despite the interior views, the
          apartments Southern and Eastern exposures allow for lovely natural
          light to fill every room. The master suite is surrounded by
          handcrafted milkwork and features incredible walk-in closet and
          storage space.
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <p className="mt10 mb10">
              Fully furnished. Elegantly appointed condominium unit situated on
              premier location. PS6. The wide entry hall leads to a large living
              room with dining area. This expansive 2 bedroom and 2 renovated
              marble bathroom apartment has great windows. Despite the interior
              views, the apartments Southern and Eastern exposures allow for
              lovely natural light to fill every room. The master suite is
              surrounded by handcrafted milkwork and features incredible walk-in
              closet and storage space.
            </p>
            <p className="mt10 mb10">
              Fully furnished. Elegantly appointed condominium unit situated on
              premier location. PS6. The wide entry hall leads to a large living
              room with dining area. This expansive 2 bedroom and 2 renovated
              marble bathroom apartment has great windows. Despite the interior
              views, the apartments Southern and Eastern exposures allow for
              lovely natural light to fill every room. The master suite is
              surrounded by handcrafted milkwork and features incredible walk-in
              closet and storage space.
            </p>
          </div>
        </div>
        <p className="overlay_close">
          <a
            className="text-thm fz14"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Show More <span className="flaticon-download-1 fz12"></span>
          </a>
        </p>
      </div>
    </div>
  );
}
