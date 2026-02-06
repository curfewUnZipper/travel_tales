import mongoose from "mongoose";

const DiarySchema = new mongoose.Schema({
  userId: String,
  title: String,
  content: String,
}, { timestamps: true });

export default mongoose.models.Diary || mongoose.model("Diary", DiarySchema);
