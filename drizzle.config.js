import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url: "postgresql://MockMate_owner:xv8a3peXNfTt@ep-plain-pine-a5rkvltv.us-east-2.aws.neon.tech/MockMate?sslmode=require",
  },
});
