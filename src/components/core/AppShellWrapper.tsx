"use client";

import {
  Anchor,
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Burger,
  Group,
  NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconLayoutDashboardFilled, IconUserFilled } from "@tabler/icons-react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import SiteLogo from "@/components/core/SiteLogo";
import SignOutButton from "@/features/auth/components/SignOutButton";
import UserAvatar from "@/features/auth/components/UserAvatar";

interface AppShellWrapperProps extends Readonly<{ children: ReactNode }> {}

const navLinks: { label: string; leftSection: ReactNode; href: Route }[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    leftSection: <IconLayoutDashboardFilled />,
  },
  {
    label: "Profile",
    href: "/profile",
    leftSection: <IconUserFilled />,
  },
];

const AppShellWrapper: React.FC<AppShellWrapperProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShellHeader>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />

            <Anchor component={Link} href="/dashboard">
              <SiteLogo />
            </Anchor>
          </Group>

          <UserAvatar size={48} />
        </Group>
      </AppShellHeader>

      <AppShellNavbar p="md">
        {navLinks.map(({ href, label, leftSection }) => (
          <NavLink
            key={href}
            href={href}
            component={Link}
            label={label}
            leftSection={leftSection}
            active={href === pathname}
          />
        ))}

        <SignOutButton />
      </AppShellNavbar>

      <AppShellMain>{children}</AppShellMain>

      <AppShellFooter p="md" ta={"center"}>
        &copy; Tawi {new Date().getFullYear()}
      </AppShellFooter>
    </AppShell>
  );
};

export default AppShellWrapper;
