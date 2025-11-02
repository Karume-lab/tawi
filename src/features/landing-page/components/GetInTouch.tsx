"use client";

import {
  Anchor,
  Box,
  Button,
  Container,
  Group,
  Image as MantineImage,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import {
  IconMailFilled,
  IconMapPinFilled,
  IconPhoneFilled,
  type TablerIcon,
} from "@tabler/icons-react";
import Image from "next/image";
import SectionTitle from "@/features/landing-page/components/SectionTitle";
import { getPrimaryColorHexCode } from "@/lib/utils";
import GetInTouchIllustration from "~/public/landing-page/get-in-touch.svg";

const contacts: { Icon: TablerIcon; label: string; href: string }[] = [
  {
    Icon: IconPhoneFilled,
    label: "+254704150182",
    href: "tel:+254704150182",
  },
  {
    Icon: IconMailFilled,
    label: "danielkarume@outlook.com",
    href: "mailto:danielkarume@outlook.com",
  },
  {
    Icon: IconMapPinFilled,
    label: "Nairobi",
    href: "https://www.google.com/maps/place/Nairobi/",
  },
];

const GetInTouch = () => {
  return (
    <Box py="xl" px={{ base: "sm", sm: "md", md: "xl" }} id="get-in-touch-with">
      <Container size="lg">
        <SectionTitle
          title="GET IN TOUCH"
          description="Got Feedback? Here's a form!"
        />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt="xl">
          <Stack>
            <TextInput label="Full Name" placeholder="Your name" withAsterisk />
            <TextInput
              label="Email"
              placeholder="you@example.com"
              type="email"
              withAsterisk
            />
            <TextInput
              label="Phone Number"
              placeholder="+254..."
              withAsterisk
            />
            <Textarea
              label="Message"
              placeholder="Tell us what you're thinking..."
              minRows={4}
              autosize
              withAsterisk
            />
            <Button type="submit" fullWidth>
              Send Message
            </Button>
          </Stack>

          <Stack align="center" justify="space-between" gap="md">
            <MantineImage
              component={Image}
              alt="Get in touch illustration"
              src={GetInTouchIllustration}
              width={300}
              height={300}
              fit="contain"
              style={{ maxWidth: "100%" }}
            />

            <Group gap="xs" align="center" pt="md">
              {contacts.map(({ Icon, label, href }) => (
                <Anchor
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                >
                  <Group gap="xs">
                    <Icon color={getPrimaryColorHexCode()} />
                    <Text>{label}</Text>
                  </Group>
                </Anchor>
              ))}
            </Group>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default GetInTouch;
