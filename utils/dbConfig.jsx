import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://expense-tracker_owner:zV0uN3ednCic@ep-dawn-recipe-a5te0ghd.us-east-2.aws.neon.tech/expense-tracker?sslmode=require"
);
export const db = drizzle(sql, { schema });
