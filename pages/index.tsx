import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FeaturedArticles from "../components/blog/FeaturedArticles";
import BecomePartner from "../components/landing/BecomePartner";
import Cities from "../components/landing/Cities";
import FeaturedProperties from "../components/landing/FeaturedProperties";
import PartnerList from "../components/landing/PartnerList";
import Search from "../components/landing/Search";
import Testimonials from "../components/landing/Testimonials";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      {/* Main Header Nav For Mobile */}
      {/* Home Design */}
      <Search></Search>
      {/* Feature Properties */}
      <FeaturedProperties></FeaturedProperties>
      {/* Property Cities */}
      <Cities></Cities>
      {/* Why Chose Us */}
      <WhyChooseUs></WhyChooseUs>
      {/* Our Testimonials */}
      <Testimonials></Testimonials>
      {/* Our Blog */}
      <FeaturedArticles></FeaturedArticles>
      {/* Our Partners */}
      <PartnerList></PartnerList>
      <BecomePartner></BecomePartner>
      <Footer></Footer>
      <a className="scrollToHome" href="#">
        <i className="flaticon-arrows"></i>
      </a>
    </div>
  );
};

export default Home;
