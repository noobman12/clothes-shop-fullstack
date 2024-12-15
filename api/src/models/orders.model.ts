import { Schema, model } from "mongoose";
import { orderStatus, paymentType } from "../constants/order.constant";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import { IOrder, TOrderItems, OrderModelType } from "../types/modes";

const ordersSchema = new Schema<TOrderItems>({
  product_name: {
    type: String,
    require: false,
  },
  thumbnail: {
    type: String,
    require: false,
  },
  quantity: {
    type: Number,
    min: 1,
  },
  price: {
    type: Number,
    min: 0,
  },
  discount: {
    type: Number,
    min: 0,
  },
  price_end: {
    type: Number,
    min: 0,
  },
});

ordersSchema.plugin(mongooseLeanVirtuals);

ordersSchema.set("toJSON", { virtuals: true });
// Virtuals in console.log()
ordersSchema.set("toObject", { virtuals: true });

const Order = model("Order", ordersSchema);

export default Order;
