import About from "@/components/About";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Stack from "@/components/Stack";
/**
 * Renders the homepage composed of the Hero, Stack, About, and LogoTicker sections.
 *
 * @returns A React fragment containing the `<Hero />`, `<Stack />`, `<About />`, and `<LogoTicker />` components in that order.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Stack />
      <About />
      <LogoTicker />
    </>
  );
}