import AboutUs from '../common_Page/HeroSection/AboutUs';

import ContactForm from '../common_Page/HeroSection/ContactUs';
import HowItWorks from '../common_Page/HeroSection/HowItWorks';
import LandingHome from '../common_Page/HeroSection/LandingHome';
import PricingPlans from '../common_Page/HeroSection/PricingPlans';
import WhyImportant from '../common_Page/HeroSection/WhyImportant';

function Landing_Page() {
  return (
    <>
      <LandingHome />
      <HowItWorks />
      <WhyImportant />
      <PricingPlans />
      <AboutUs />
      <ContactForm />
    </>
  );
}

export default Landing_Page;
