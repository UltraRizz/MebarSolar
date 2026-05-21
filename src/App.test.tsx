import { siteConfig } from "./config/site";

test("has starter site configuration", () => {
  expect(siteConfig.brand.name).toBe("Mebar Solar");
  expect(siteConfig.routes.length).toBeGreaterThan(0);
});
