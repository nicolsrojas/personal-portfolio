import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/Contact";
import ParticlesBackground from "@/components/effects/ParticlesBackground";
import SmoothScroll from "@/components/effects/SmoothScroll";
import { Toaster } from 'react-hot-toast';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
      <>
        <Header/>
        <SmoothScroll>
          <div className="background-container" data-speed="0.5">
            <ParticlesBackground />
          </div>
          {children}
          <div className="contact-footer-wrapper flex-center flex-column">
            <ContactSection />
            <Footer />
          </div>
        </SmoothScroll>
        <Toaster position="bottom-center"
          toastOptions={{
            style: {
              background: '#1f2937',
              color: '#ffffff',
            },
            duration: 5000
          }}
        />
      </>
  );
}
