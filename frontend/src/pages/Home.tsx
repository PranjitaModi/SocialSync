import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Features from "../components/Home/Features";
import Testimonials from "../components/Home/Testimonials";
import Pricing from "../components/Home/Pricing";
import CTA from "../components/Home/CTA";
import Footer from "../components/Home/Footer";

export default function Landing() {
    return (
        <div className="min-h-screen bg-bg text-slate-900 font-sans">
            <Navbar />
            <Hero />
            <HowItWorks />
            <Features />
            <Testimonials />
            <Pricing />
            <CTA />
            <Footer />
        </div>
    );
}
