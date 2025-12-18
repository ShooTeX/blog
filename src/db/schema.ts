import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const subscriberTable = sqliteTable("subscribers", {
  email: text().notNull().unique().primaryKey(),
  subscribedAt: text().notNull()
})
