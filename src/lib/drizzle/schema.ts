import { pgTable, serial, text, boolean, timestamp } from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  mobile: text("mobile").notNull(),
  qualification: text("qualification"),
  state: text("state"),
  whatsappUpdates: boolean("whatsapp_updates").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
