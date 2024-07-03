import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { QRCodeGenerator } from "sanity-qr-code-generator";

import { name } from "./package.json";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: name,

  dataset: import.meta.env.SANITY_STUDIO_DATASET_TYPE,
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,

  plugins: [structureTool(), visionTool(), QRCodeGenerator()],

  schema: {
    types: schemaTypes,
  },
});
