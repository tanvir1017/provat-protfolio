import React from "react";
import HeroSection from "./hero-section/hero-section";
import WhyMe from "./why-me/why-me";
import RecentWork from "./recent-work/recent-work";
import PlanAndPricing from "./plan-and-pricing/plan-and-pricing";
import ReviewOrTestimonial from "./review-or-testimonial/review-or-testimonial";
import ContactMe from "./contact/contect-me";
import * as Theme from "@/components/styled-components/theme";

const Home = () => {
  return (
    <>
      {/* Navbar with hero section */}

      <Theme.PurpleBlurry className="hero__section__afterEffects overflow-hidden">
        {/* <Navbar /> */}
        <HeroSection />
      </Theme.PurpleBlurry>
      {/* Navbar with hero section */}

      {/* Why Me section */}
      <WhyMe />
      {/* Why Me section */}

      {/* Why Me section */}
      <RecentWork />
      {/* Why Me section */}

      {/*Plan And Pricing */}
      <PlanAndPricing />
      {/*Plan And Pricing */}

      {/*Review And Testimonial */}
      <ReviewOrTestimonial />
      {/*Review And Testimonial */}

      {/*Contact me */}
      <ContactMe />
      {/*Contact me */}
    </>
  );
};

export default Home;
