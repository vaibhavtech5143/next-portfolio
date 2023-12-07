import mongoose from "mongoose";


let Education;

try {
  Education = mongoose.model("Education");
  
} catch {

  const EducationSchema = new mongoose.Schema({
    degree: String,
    year: String,
    college: String,
  },{
      timestamps: true
  })
  Education = mongoose.model("Education",EducationSchema);  
  
}

export default Education