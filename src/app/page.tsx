import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Categories } from "@/components/sections/Categories";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { WhyUs } from "@/components/sections/WhyUs";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { AppDownload } from "@/components/sections/AppDownload";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Categories />
      <FeaturedProducts />
      <WhyUs />
      <ServiceAreas />
      <AppDownload />
      <Testimonials />
      <CTABanner />
    </>
  );
}
