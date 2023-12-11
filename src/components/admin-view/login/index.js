"use client"

import Formcontrols from "../form-controls";


    const controls =[
        {
            name:"username",
            placeholder: "Enter You'r UserName",
            type:"text",
            label:"Enter Your Username"

        },{
            password:"password",
            placeholder: "Enter You'r password",
            type:"password",
            label:"Enter Your password"

        }
    ]

export default function Login(formData,setFormData){


    return (
        <div className="h-auto flex flex-col justify-center items-center mt-10 border">
        <div className="bg-[#ffffff] shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <Formcontrols controls={controls} formData={formData} setFormData ={setFormData} />
        </div>
        {/* <Formcontrols  controls={controls} formData={formData} setFormData ={setFormData}/> */}
        <button onClick={()=>{handleSaveData('home')}} className=" border border-orange-600 font-bold text-[16px] p-4 mt-[10px] border hover:active:bg-grey-500 active:text-orange-400  ">Add Info</button>
         </div>
      )

}