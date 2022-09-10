// import Head from "next/head";
import Hero from "../components/index/hero";
import Navbar from "../components/index/navbar";
import SectionTitle from "../components/index/sectionTitle";

import { benefitOne, benefitTwo } from "../components/index/data";
import Video from "../components/index/video";
import Benefits from "../components/index/benefits";
import Footer from "../components/index/footer";
import Testimonials from "../components/index/testimonials";
import Cta from "../components/index/cta";
import Faq from "../components/index/faq";
import PopupWidget from "../components/index/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Productify - Manage your day on productify</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/img/productify-logo.svg" />
      </Head> */}

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Productity Benefits"
        title=" Why should you use Productify"
      ></SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
