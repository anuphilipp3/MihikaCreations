import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId, sanityEnabled } from "./env";

export const sanityClient = sanityEnabled
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // fast, cached reads for a public catalog
    })
  : null;
