import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema({
    name: String,
    technologies: String,
    website: String,
    github: String,
    demo: String,
},{
    timestamps: true
})



const Projects = mongoose.model("Projects",ProjectsSchema);

export default Projects