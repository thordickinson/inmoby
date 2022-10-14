import FeaturedProperties from "../../components/landing/FeaturedProperties";
import Search from "../../components/landing/Search";
import Testimonials from "../../components/landing/Testimonials";
import WhyChooseUs from "../../components/landing/WhyChooseUs";
import AgencyLayout from "../../components/layout/AgencyLayout";

export default function AgencyIndex() {
  return (
    <AgencyLayout>
      <Search></Search>
      <Testimonials></Testimonials>
      <FeaturedProperties></FeaturedProperties>
      <WhyChooseUs></WhyChooseUs>
    </AgencyLayout>
  );
}
