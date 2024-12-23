import { Schema, model } from "mongoose";
import { orderStatus, paymentType } from "../constants/order.constant";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import { IOrder, TOrderItems, OrderModelType } from "../types/modes";

const ordersItemsSchema = new Schema<TOrderItems>({
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

const ordersSchema = new Schema<IOrder, OrderModelType>({
  customer: {
    type: Schema.Types.ObjectId, //_id
    ref: "Customer",
    required: false,
    default: null,
  },
  order_date: {
    type: Date,
    required: false,
    default: Date.now,
  },
  payment_type: {
    type: Number,
    required: false,
    /**
     * payment type:
     * 1 = COD;
     * 2 = Credit;
     * 3 = ATM;
     * 4 = Cash
     */
    enum: [1, 2, 3, 4],
    default: 4, // mặc định khi tạo đơn mới
  },
  order_note: {
    type: String,
    required: false,
  },
  street: {
    type: String,
    required: true,
    maxLength: 255,
  },
  city: {
    type: String,
    required: true,
    maxLength: 50,
  },
  state: {
    type: String,
    required: false,
    maxLength: 50,
  },
  order_items: [ordersItemsSchema],
  totalAmount: {
    type: Number,
    min: 0,
  },
});

ordersSchema.plugin(mongooseLeanVirtuals);

ordersSchema.set("toJSON", { virtuals: true });
// Virtuals in console.log()
ordersSchema.set("toObject", { virtuals: true });

const Order = model<IOrder, OrderModelType>("Order", ordersSchema);

export default Order;
