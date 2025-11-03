import { ImageResponse } from "next/og";
import { env } from "@/lib/types";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const openGraphImage = async (): Promise<ImageResponse> => {
  const logo = `${env.NEXT_PUBLIC_APP_URL}/core/logo.png`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(135deg, #1a3c1d 0%, #2e7d32 50%, #a3da70 100%)",
        color: "white",
        fontFamily: "Inter, sans-serif",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: <Image /> cannot be used here */}
      <img
        src={logo}
        width={220}
        height={220}
        alt="Tawi logo"
        style={{
          borderRadius: "50%",
          objectFit: "contain",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 60,
          fontSize: 24,
          opacity: 0.75,
          display: "flex",
        }}
      >
        &copy; {new Date().getFullYear()} Tawi by Karume Lab
      </div>
    </div>,
    {
      ...size,
    },
  );
};

export default openGraphImage;
