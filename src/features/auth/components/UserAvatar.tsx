"use client";

import { Avatar, Skeleton, Text } from "@mantine/core";
import { authClient } from "@/features/auth/utils/auth-client";

interface UserAvatarProps {
  image?: string | null;
  size?: number | string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ image, size = 80 }) => {
  const { data: session, isPending } = authClient.useSession();

  const initials = session?.user?.name
    ? session.user.name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0]?.toUpperCase())
        .join("")
    : "?";

  if (isPending) {
    return <Skeleton height={size} width={size} circle />;
  }

  return (
    <Avatar
      src={image ?? session?.user.image ?? null}
      alt={session?.user?.name ?? "User"}
      size={size}
      color="primary"
      styles={{
        root: {
          textTransform: "uppercase",
          fontWeight: 600,
          fontSize: "1rem",
        },
      }}
    >
      <Text fw={600} tt="uppercase">
        {initials}
      </Text>
    </Avatar>
  );
};

export default UserAvatar;
