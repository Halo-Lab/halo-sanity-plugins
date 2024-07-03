import { defineCliConfig, getStudioEnvironmentVariables } from "sanity/cli";

const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET_TYPE } =
  getStudioEnvironmentVariables({
    envFile: { mode: "development" },
  });

export default defineCliConfig({
  api: {
    dataset: SANITY_STUDIO_DATASET_TYPE,
    projectId: SANITY_STUDIO_PROJECT_ID,
  },
});
