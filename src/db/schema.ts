import { sql } from "drizzle-orm";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const subscriberTable = sqliteTable("subscribers", {
  email: text().notNull().unique().primaryKey(),
  subscribedAt: integer({ mode: "timestamp" }).default(sql`(unixepoch())`),
})
