import PropertyGridItem from "../search/PropertyGridElement";

export default function SimilarProperties() {
  const elements = Array.from(new Array(4));
  return (
    <>
      <div className="col-lg-12">
        <h4 className="mt30 mb30">Similar Properties</h4>
      </div>
      {elements.map((e) => (
        <div className="col-lg-6" key={e}>
          <PropertyGridItem></PropertyGridItem>
        </div>
      ))}
    </>
  );
}
