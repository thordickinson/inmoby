import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CSSProperties } from "react";

interface Testimonial {
  image: string;
  name: string;
  position: string;
  message: string;
}

const ItemStyle: CSSProperties = {
  flex: "0 0 100%",
};

function createTestimonial(testimonial: Testimonial) {
  return (
    <div className="item" key={testimonial.name} style={ItemStyle}>
      <div className="testimonial_grid">
        <div className="thumb">
          <img src="/images/testimonial/1.jpg" alt="1.jpg" />
        </div>
        <div className="details">
          <h4>Augusta Silva</h4>
          <p>Sales Manager</p>
          <p className="mt25">
            Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim
            donec vel lectus vel felis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [emblaViewport] = useEmblaCarousel();
  const testimonials: Testimonial[] = Array.from(new Array(5).keys()).map(
    (i) => ({
      image: `/images/testimonial/${i}.jpg`,
      name: `Name ${i}`,
      position: `Position ${i}`,
      message:
        "Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.",
    })
  );
  return (
    <section id="our-testimonials" className="our-testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="main-title text-center">
              <h2 className="color-white">Testimonials</h2>
              <p className="color-white">Here could be a nice sub title</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3 embla" ref={emblaViewport}>
            <div className="testimonial_grid_slider embla__container">
              {testimonials.map(createTestimonial)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
