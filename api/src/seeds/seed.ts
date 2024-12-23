import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import Order from "../models/orders.model";
import { globalConfig } from "../constants/configs";

// Define the structure of the payload
interface OrderItem {
  product_name: string;
  quantity: number;
  price: number;
  discount: number;
  price_end: number;
}

interface OrderPayload {
  payment_type: number;
  order_date: Date;
  street: string;
  city: string;
  state: string;
  order_note: string;
  order_items: OrderItem[];
  totalAmount: number;
}

// Function to generate order items
const generateOrderItems = (count: number): OrderItem[] => {
  return Array.from({ length: count }, () => {
    const price = Number(faker.commerce.price({ min: 100, max: 200, dec: 0 }));
    const discount = 0;
    const price_end = price * (1 - discount / 100);
    return {
      product_name: faker.commerce.product(),
      quantity: faker.number.int({ min: 1, max: 10 }),
      price,
      discount,
      price_end,
    };
  });
};

// Function to create a single order
const createOrder = async (): Promise<boolean> => {
  const startDate = new Date("2024-01-01");
  const endDate = new Date("2024-12-20");
  const randomDate = faker.date.between({ from: startDate, to: endDate });
  try {
    const order_items = generateOrderItems(
      faker.number.int({ min: 1, max: 5 })
    );
    const totalAmount = order_items.reduce(
      (total, item) => total + item.price_end * item.quantity,
      0
    );

    const payload_order: OrderPayload = {
      payment_type: faker.number.int({ min: 1, max: 4 }),
      order_date: randomDate,
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      order_note: faker.word.words(5),
      order_items,
      totalAmount,
    };

    const order = await Order.create(payload_order);
    return !!order;
  } catch (error) {
    console.error("Error creating order:", error);
    return false;
  }
};

// Main seeding function
const seedOrders = async (count: number = 10) => {
  console.log(`Starting to seed ${count} orders...`);

  try {
    // Connect to MongoDB
    await mongoose.connect(globalConfig.MONGODB_URL as string, {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000,
    });
    console.log("Connected to MongoDB");

    // Clear existing orders
    await Order.deleteMany({});
    console.log("Cleared existing orders");

    // Create orders
    let successCount = 0;
    for (let i = 0; i < count; i++) {
      const success = await createOrder();
      if (success) successCount++;
      process.stdout.write(`\rProgress: ${i + 1}/${count} orders created`);
    }

    console.log(
      `\nSeeding completed. Successfully created ${successCount}/${count} orders`
    );
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    // Close MongoDB connection
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
};

// Execute seeding with command line argument for count or default to 10
const orderCount = process.argv[2] ? parseInt(process.argv[2]) : 10;
seedOrders(orderCount);
