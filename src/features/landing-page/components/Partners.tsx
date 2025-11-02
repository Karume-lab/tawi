import { Marquee } from "@gfazioli/mantine-marquee";
import { Box, ThemeIcon, Tooltip } from "@mantine/core";
import {
  IconFlower,
  IconLeaf,
  IconPlant,
  IconSeedling,
  IconSun,
  IconTree,
  IconTrees,
} from "@tabler/icons-react";
import styles from "#/partners.module.css";
import SectionTitle from "@/features/landing-page/components/SectionTitle";

const partners = [
  { uuid: crypto.randomUUID(), name: "Tree Co.", Icon: IconTree },
  { uuid: crypto.randomUUID(), name: "Leaf Org", Icon: IconLeaf },
  { uuid: crypto.randomUUID(), name: "Plant Foundation", Icon: IconPlant },
  { uuid: crypto.randomUUID(), name: "Seedling Group", Icon: IconSeedling },
  { uuid: crypto.randomUUID(), name: "Flower Initiative", Icon: IconFlower },
  { uuid: crypto.randomUUID(), name: "Sun Alliance", Icon: IconSun },
  { uuid: crypto.randomUUID(), name: "Forest Network", Icon: IconTrees },
];

const Partners = () => {
  return (
    <Box id="partners">
      <Box px={{ base: "md", sm: "lg", md: 80, lg: 120 }} py="xl">
        <SectionTitle
          title="OUR FOREST PARTNERS"
          description="We team up with organizations that care about trees, forests, and the planet."
        />
      </Box>

      <Box mt="lg" px={{ base: "sm", sm: "lg", md: 80 }}>
        <Marquee pauseOnHover fadeEdges repeat={4}>
          {partners.map((partner) => (
            <Tooltip
              key={partner.uuid}
              label={partner.name}
              withArrow
              position="top"
            >
              <ThemeIcon
                variant="transparent"
                className={styles.iconResponsive}
                mx="md"
                size={60}
                radius="md"
              >
                <partner.Icon style={{ width: "70%", height: "70%" }} />
              </ThemeIcon>
            </Tooltip>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default Partners;
