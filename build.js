import { build } from "esbuild";

build({
  entryPoints: ["server.js"],
  bundle: true,
  platform: "node",
  target: "node18",
  outfile: "dist/index.js",
  sourcemap: true,
}).catch(() => process.exit(1));
