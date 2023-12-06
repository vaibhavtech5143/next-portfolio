import mongoose from "mongoose";

let Experience;

try {

    Experience = mongoose.model("Experience")
   
} catch {
    const ExperienceSchema = new mongoose.Schema({
        position: String,
        company: String,
        duration: String,
        location: String,
        jobprofile: String,
    },{
        timestamps: true
    })
    
    
    
    
    Experience = mongoose.model("Experience",ExperienceSchema);
}

export default Experience