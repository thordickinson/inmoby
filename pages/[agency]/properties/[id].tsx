import AgencyLayout from "../../../components/layout/AgencyLayout";
import Attachments from "../../../components/property/Attachment";
import CategoriesSidebar from "../../../components/property/CategoriesSidebar";
import ContactForm from "../../../components/property/ContactForm";
import Description from "../../../components/property/Description";
import Details from "../../../components/property/Details";
import ExtraDetails from "../../../components/property/ExtraDetails";
import FeaturedSidebar from "../../../components/property/FeaturedSidebar";
import Features from "../../../components/property/Features";
import Location from "../../../components/property/Location";
import RecentlyViewedSidebar from "../../../components/property/RecentlyViewedSidebar";
import SearchForm from "../../../components/property/SearchForm";
import FloorPlans from "../../../components/property/FloorPlans";
import Video from "../../../components/property/Video";
import WalkScore from "../../../components/property/WalkScore";
import NearbyPlaces from "../../../components/property/NearbyPlaces";
import PaymentCalculator from "../../../components/property/PaymentCalculator";
import Statistics from "../../../components/property/Statistics";
import ReviewsList from "../../../components/property/ReviewList";
import ReviewForm from "../../../components/property/ReviewForm";
import SimilarProperties from "../../../components/property/SimilarProperties";
import Gallery from "../../../components/property/Gallery";

export default function PropertyPage() {
  return (
    <>
      <AgencyLayout>
        <Gallery></Gallery>
        <section className="our-agent-single bgc-f7 pb30-991">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <Description></Description>
                  <Details></Details>
                  <ExtraDetails></ExtraDetails>
                  <Attachments></Attachments>
                  <Features></Features>
                  <Location></Location>
                  <FloorPlans></FloorPlans>
                  <Video></Video>
                  <WalkScore></WalkScore>
                  <NearbyPlaces></NearbyPlaces>
                  <PaymentCalculator></PaymentCalculator>
                  <Statistics></Statistics>
                  <ReviewsList></ReviewsList>
                  <ReviewForm></ReviewForm>
                  <SimilarProperties></SimilarProperties>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4">
                <ContactForm></ContactForm>
                <SearchForm></SearchForm>
                <FeaturedSidebar></FeaturedSidebar>
                <CategoriesSidebar></CategoriesSidebar>
                <RecentlyViewedSidebar></RecentlyViewedSidebar>
              </div>
            </div>
          </div>
        </section>
      </AgencyLayout>
    </>
  );
}
