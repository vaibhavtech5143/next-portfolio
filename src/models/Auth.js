import mongoose from "mongoose";

let Auth;
try {

    Auth = mongoose.model("Auth");

} catch {
    

const AuthSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type:String, required:true}
},{
    timestamps: true
});

Auth = mongoose.model("Auth",AuthSchema);
}


export default Auth;