import { Stack } from "@mantine/core";
import {
  Faqs,
  Features,
  GetInTouch,
  HeroSection,
  MissionVision,
  Partners,
  Statistics,
  TheCreator,
} from "@/features/landing-page";

const LandingPage = () => {
  return (
    <Stack gap={"lg"}>
      <HeroSection />
      <Features />
      <Statistics />
      <Partners />
      <MissionVision />
      <Faqs />
      <TheCreator />
      <GetInTouch />
    </Stack>
  );
};

export default LandingPage;
