import Footer from "@/components/footer";
import LandingContent from "@/components/landing-content";
import LandingHero from "@/components/landing-hero";
import LandingNavbar from "@/components/landing-navbar";
import { AuthProvider } from "@/contexts/AuthContext";

const LandingPage = () => {
  return (
    <AuthProvider>
      <div className="h-full">
        <LandingNavbar />
        <LandingHero />
        <LandingContent />
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default LandingPage;
