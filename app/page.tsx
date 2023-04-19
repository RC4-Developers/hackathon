import ScrollUp from "@/components/Common/ScrollUp";
import Events from "@/components/Events";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Timetable from "@/components/Timetable";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Events />
      {/* <Video /> */}
      {/* <Brands /> */}
      <Timetable />
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
