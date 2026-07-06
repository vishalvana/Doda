import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
    },
    company:{
        type: String,
        required: true,
        trim: true,
    },
    location:{
        type: String,
        default: "",
    },
    salary:{
        type: String,
        default: "",
    },
    experience:{
        type: String,
        default: "",
    },
    employmentType:{
        type: String,
        default: "",
    },
    description:{
        type: String,
        default: "",
    },
    skills:[{
        type: String,
    },],
    applyUrl:{
        type:String,
        required: true,
    },
    source:{
        type:String,
        required:true,
    },
    postedAt:{
        type: Date,
    },
    scrapedAt:{
        type: Date,
        default: Date.now,
    },
    sourceJobId: {
  type: String,
  default: null,
},

sourceUrl: {
  type: String,
  required: true,
  unique: true,
},

status: {
  type: String,
  enum: ["ACTIVE", "EXPIRED"],
  default: "ACTIVE",
},

lastSeenAt: {
  type: Date,
  default: Date.now,
},
},{
    timestamps: true,
});
jobSchema.index({
  title: "text",
  company: "text",
  description: "text",
});

jobSchema.index({
  status: 1,
  createdAt: -1,
});

jobSchema.index({
  source: 1,
});
export default mongoose.model("job",jobSchema);
