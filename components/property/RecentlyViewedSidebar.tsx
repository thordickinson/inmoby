import RecentlyViewedElement from "./RecentlyViewedElement";

export default function RecentlyViewedSidebar() {
  const elements = Array.from(new Array(3));
  return (
    <div className="sidebar_feature_listing">
      <h4 className="title">Recently Viewed</h4>
      {elements.map((e, i) => (
        <RecentlyViewedElement key={i}></RecentlyViewedElement>
      ))}
    </div>
  );
}
