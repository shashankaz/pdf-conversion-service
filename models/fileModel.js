import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    originalFile: {
      name: {
        type: String,
        required: true,
      },
      size: {
        type: Number,
        required: true,
      },
      format: {
        type: String,
        required: true,
      },
    },
    convertedFile: {
      conversionType: {
        type: String,
        required: true,
      },
      fileUrl: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const FileConversion = mongoose.model("FileConversion", fileSchema);

export default FileConversion;
