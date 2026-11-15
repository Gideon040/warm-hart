import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Geen cacheComponents: de kennisbankpagina's uit het startpakket gebruiken
  // fetch met next.revalidate, net als op de andere klantsites.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [96, 256, 384],
  },
};

export default nextConfig;
