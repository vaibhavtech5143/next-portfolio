import mongoose from 'mongoose';

let Home;

try {
  // Check if the model already exists, if not, create it
  Home = mongoose.model('Home');
} catch {
  const HomeSchema = new mongoose.Schema({
    heading: String,
    summary: String
},{
    timestamps: true
});

  Home = mongoose.model('Home', HomeSchema);
}

export default Home;


// import mongoose from "mongoose";

// const HomeSchema = new mongoose.Schema({
//     heading: String,
//     summary: String
// },{
//     timestamps: true
// })



// const Home = mongoose.model("Home",HomeSchema);

// export default Home