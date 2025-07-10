import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true, min: 1, },
      },
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ["confirmed", "shipped", "delivered"], default: "placed" },
    paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
  }, { timestamps: true }
);

const orderModel = mongoose.model("Order", orderSchema);

export default orderModel;