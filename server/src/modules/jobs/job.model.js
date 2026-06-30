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
        type:date,
    },
    scrapedAt:{
        type:date,
        default: Date.now,
    },
},{
    timestamps: true,
});
export default mongoose.model("job",jobSchema);
