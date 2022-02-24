import { sp } from "@pnp/sp/presets/core";

export async function getBannerConfiguration() {
  return sp.web.lists.getByTitle("BannerConfiguration").items.get();
}
