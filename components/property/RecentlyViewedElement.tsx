export default function RecentlyViewedElement() {
  return (
    <div className="media">
      <img
        className="align-self-start mr-3"
        src="/images/blog/fls1.jpg"
        alt="fls1.jpg"
      />
      <div className="media-body">
        <h5 className="mt-0 post_title">Nice Room With View</h5>
        <a href="#">
          $13,000/<small>/mo</small>
        </a>
        <ul className="mb0">
          <li className="list-inline-item">Beds: 4</li>
          <li className="list-inline-item">Baths: 2</li>
          <li className="list-inline-item">Sq Ft: 5280</li>
        </ul>
      </div>
    </div>
  );
}
