import { Stack } from "@mantine/core";
import {
  Faqs,
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
