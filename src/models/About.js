import mongoose from "mongoose";


let About;
try {

    About = mongoose.model("About")

} catch {
    const AboutSchema = new mongoose.Schema({

        aboutme: String,
        noofprojects: String,
        yearofexperience: String,
        noofclients: String,
        skills: String,
    },{
        timestamps: true
    });
        About = mongoose.model("About",AboutSchema);
}
export default About;