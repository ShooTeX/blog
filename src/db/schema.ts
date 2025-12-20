import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const subscriberTable = sqliteTable("subscribers", {
  email: text().notNull().unique().primaryKey(),
  subscribedAt: integer({ mode: "timestamp" }).default(sql`(unixepoch())`),
});
