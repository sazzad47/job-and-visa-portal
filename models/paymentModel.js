import mongoose from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const paymentSchema = new mongoose.Schema(
  {
    index: Number,
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    visaApplyID: {
      type: String,
      default: "",
    },
    bankReceipt: {
      type: String,
      default: "",
    },
    method: {
      type: String,
      default: "",
    },
    amount: {
      type: String,
      default: "",
    },
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    address1: {
      type: String,
      default: "",
    },
    address2: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    customer_state: {
      type: String,
      default: "",
    },
    zip: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      default: "",
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

if (!mongoose.models.payment) {
  paymentSchema.plugin(AutoIncrement, {
    id: "paymentCounter",
    inc_field: "index",
  });
}

let Dataset =
  mongoose.models.payment || mongoose.model("payment", paymentSchema);
export default Dataset;
