import Order from "../models/orders.model";

const createRecordOrder = async (payload: any) => {
  console.log("payload order", payload);
  const payload_order = {
    product_name: payload.product_name,
    quantity: payload.quantity,
    price: payload.price,
    discount: payload.discount,
    customer: payload.customer,
    order_status: payload.order_status,
    payment_type: payload.payment_type,
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
};
