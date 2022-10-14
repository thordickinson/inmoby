import FeaturedSidebarElement from "./FeaturedSidebarElement";

export default function FeaturedSidebar() {
  const elements = Array.from(new Array(5).keys());
  return (
    <div className="terms_condition_widget">
      <h4 className="title">Featured Properties</h4>
      <div className="sidebar_feature_property_slider">
        {elements.map((e) => (
          <FeaturedSidebarElement key={e}></FeaturedSidebarElement>
        ))}
      </div>
    </div>
  );
}
