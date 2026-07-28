import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Search from "@/components/home/Search";
import Stats from "@/components/home/Stats";
import Featured from "@/components/home/Featured";
import WhyUs from "@/components/home/WhyUs";
import Cities from "@/components/home/Cities";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Search />
      <Stats />
      <Featured />
      <WhyUs />
      <Cities />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}