import { TOrderItems } from "./../types/modes";
import Order from "../models/orders.model";
import { IOrder } from "../types/modes";

const findAllOrder = async (payload: any) => {
  const orders: IOrder[] = await Order.find(payload);
  return orders;
};

const findById = async (id: string) => {
  const order = await Order.findById(id);
  return order;
};

const createRecordOrder = async (payload: any) => {
  console.log("payload order", payload);
  const totalAmount = payload.order_items.reduce(
    (total: number, item: { price_end: number; quantity: number }) => {
      return total + item.price_end * item.quantity;
    },
    0
  );
  const payload_order = {
    payment_type: payload.payment_type,
    street: payload.customer.street,
    city: payload.customer.city,
    state: payload.customer.state,
    order_note: payload.customer.order_note,
    order_items: payload.order_items,
    totalAmount: totalAmount,
  };
  console.log("🚀 ~ createRecordOrder ~ payload_order:", payload_order);
  const order = await Order.create(payload_order);
  if (order) {
    console.log("Tao don thanh cong");
  } else {
    console.log("Tao don that bai");
  }
};

export default {
  createRecordOrder,
  findAllOrder,
  findById,
};
