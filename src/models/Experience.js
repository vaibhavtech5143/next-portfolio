import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
    position: String,
    company: String,
    duration: String,
    location: String,
    jobprofile: String,
},{
    timestamps: true
})



const Experience = mongoose.model("Experience",ExperienceSchema);

export default Experience