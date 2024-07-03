import { defineConfig } from "@sanity/pkg-utils";

export default defineConfig({
  extract: {
    customTags: [
      {
        name: "default",
        syntaxKind: "block",
      },
    ],
  },
  external: [
    "react",
    "sanity",
    "@sanity/ui",
    "@sanity/icons",
    "react-qr-code",
    "styled-components",
    "@sanity/form-builder",
  ],
});
