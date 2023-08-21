import {
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
    uniqueIndex,
    date,
    numeric,
    integer,
    index,
    jsonb,
} from "drizzle-orm/pg-core";

import { InferModel } from "drizzle-orm";

export const orders = pgTable('orders', {   
    id: serial('id').primaryKey().notNull(),
    product_id: varchar('product_id', { length: 255 }).notNull(),
    user_name: varchar('user_name', { length: 255 }).notNull(),
    product_name: varchar('product_name', { length: 255 }).notNull(),
    product_image: text('product_image').notNull(),
    quantity: integer('quantity').notNull(),
})

export type Order = InferModel<typeof orders>;
export type NewOrder = InferModel<typeof orders, 'insert'>;

// CREATE TABLE orders (
//     id INT NOT NULL,
//     user_name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL,
//     phone_number VARCHAR(255) NOT NULL,
//     address_line1 VARCHAR(255) NOT NULL,
//     address_line2 VARCHAR(255),
//     city VARCHAR(255) NOT NULL,
//     product_name VARCHAR(255) NOT NULL,
//     quantity INT NOT NULL,
//     PRIMARY KEY (id)
//   );