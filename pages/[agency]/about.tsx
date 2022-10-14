import AboutSection from "../../components/about-section";
import BecomePartner from "../../components/landing/BecomePartner";
import OurTeam from "../../components/landing/OurTeam";
import PageHeader from "../../components/landing/PageHeader";
import PartnerList from "../../components/landing/PartnerList";
import Testimonials from "../../components/landing/Testimonials";
import AgencyLayout from "../../components/layout/AgencyLayout";

export default function About() {
  return (
    <AgencyLayout>
      <PageHeader></PageHeader>
      <AboutSection></AboutSection>
      <OurTeam></OurTeam>
      <Testimonials></Testimonials>
      <PartnerList></PartnerList>
      <BecomePartner></BecomePartner>
    </AgencyLayout>
  );
}
