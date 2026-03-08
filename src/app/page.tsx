import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AuthorityStrip from "@/components/AuthorityStrip";
import Differentials from "@/components/Differentials";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import OrnamentalDivider from "@/components/OrnamentalDivider";

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <AuthorityStrip />
      <OrnamentalDivider className="bg-surface-page py-6" />
      <Differentials />
      <Gallery />
      <OrnamentalDivider className="bg-surface-deep py-6" />
      <HowItWorks />
      <CTAFinal />
      <Footer />
    </main>
  );
}
