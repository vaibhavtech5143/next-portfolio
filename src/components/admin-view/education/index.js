import Formcontrols from "../form-controls";
const controls = [
  {
    name: "degree",
    placeholder: "Degree Name",
    type: "text",
    label: "Enter Degree Name",
  },
  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Year",
  },
  {
    name: "college",
    placeholder: "College Name",
    type: "text",
    label: "Enter College Name",
  },
];
const AdminEducationView = ({formData, setFormData,handleSaveData}) => {
  return (
    <div className="h-auto flex flex-col justify-center items-center mt-10 border">
    <div className="bg-[#ffffff] shadow-lg rounded px-8 pt-6 pb-8 mb-4">
    <Formcontrols controls={controls} formData={formData} setFormData ={setFormData} />
    
    
    </div>
    {/* <Formcontrols  controls={controls} formData={formData} setFormData ={setFormData}/> */}
    <button onClick={()=>handleSaveData('education')} className=" border border-orange-600 font-bold text-[16px] p-4 mt-[10px] border hover:active:bg-grey-500 active:text-orange-400  ">Add Info</button>
    
    </div>
  )
}

export default AdminEducationView