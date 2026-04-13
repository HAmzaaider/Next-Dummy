// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */

//   turbopack: {
//     root: "C:\\Users\\GEO COMPUTER S\\blogs\\next_api\\real_api"  // ✅ points to real_api as the root
//   },
// };

// export default nextConfig;
import { fileURLToPath } from "url";
import { dirname } from "path";

// ❌ REMOVE these two lines — not needed on Vercel
// const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ❌ REMOVE turbopack block — causes conflict on Vercel
  // turbopack: {
  //   root: __dirname,
  // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      }
    ]
  },
};

export default nextConfig;