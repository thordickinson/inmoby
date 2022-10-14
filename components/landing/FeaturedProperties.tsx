import useEmblaCarousel from "embla-carousel-react";
import PropertyGridItem from "../search/PropertyGridElement";
import { CSSProperties, useEffect } from "react";

const slide: CSSProperties = {
  width: "400px",
  marginRight: "40px",
};

export default function FeaturedProperties() {
  const featured = Array.from(new Array(12).keys());
  const [emblaRef, embla] = useEmblaCarousel();
  useEffect(() => {
    if (!embla) return;
    embla.scrollTo(1);
  }, [embla]);

  return (
    <section id="feature-property" className="feature-property bgc-f7">
      <div className="container ovh">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="main-title text-center mb40">
              <h2>Propiedades Destactadas</h2>
              <p>Las mejores propiedades seleccionadas por nuestro equipo.</p>
            </div>
          </div>
          <div className="col-lg-12 embla" ref={emblaRef}>
            <div className="feature_property_slider embla__container">
              {featured.map((f) => (
                <div className="embla__slide" style={slide} key={f}>
                  <PropertyGridItem></PropertyGridItem>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
