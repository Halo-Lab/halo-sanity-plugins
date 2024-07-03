import { showIncompatiblePluginDialog } from "@sanity/incompatible-plugin";

import { name, version } from "./package.json";

export default showIncompatiblePluginDialog({
  name,
  versions: {
    v3: version,
    // We do not support Sanity v2 at all.
    v2: undefined,
  },
  // We do not have exchange URL yet.
  sanityExchangeUrl: undefined,
});
