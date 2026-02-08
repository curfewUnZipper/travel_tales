import mongoose from "mongoose";

const DiarySchema = new mongoose.Schema(
  {
    userId: String,
    title: String,
    content: String,
    visibility: {
      type: String,
      enum: ["private", "public"],
      default: "private",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Diary ||
  mongoose.model("Diary", DiarySchema);
