import mongoose from "mongoose";


let Projects;

try {
    Projects = mongoose.model("Projects");
    
} catch {
    const ProjectsSchema = new mongoose.Schema({
        name: String,
        technologies: String,
        website: String,
        github: String,
        demo: String,
    },{
        timestamps: true
    });
    Projects = mongoose.model("Projects",ProjectsSchema);
}




export default Projects;