import { z } from "zod";
import * as dotenv from "dotenv";
import path from "path";

// Load .env if it exists
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const envSchema = z.object({
  CONDUIT_BASE_URL: z.url(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error(
    "❌ Invalid environment variables:",
    z.treeifyError(_env.error),
  );
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
