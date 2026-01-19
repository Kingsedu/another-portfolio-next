import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import NavBar from "@/components/NavBar";
import Stack from "@/components/Stack";
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Stack />
      <About />
      <LogoTicker />
      <Footer />
    </>
  );
}
