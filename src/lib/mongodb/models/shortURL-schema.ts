import { Schema, model, models } from "mongoose";

const shortURLSchema = new Schema({
  urlProvider: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  redirect: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
})

export default models.Url || model('Url', shortURLSchema);