import Formcontrols from "../form-controls";
const controls = [
  {
    name: "position",
    placeholder: "Position",
    type: "text",
    label: "Position",
  },
  {
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "Company",
  },
  {
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "Duration",
  },
  {
    name: "location",
    placeholder: "Location",
    type: "text",
    label: "Location",
  },
  {
    name: "jobprofile",
    placeholder: "Job Profile",
    type: "text",
    label: "Job Profile",
  },
];

const AdminExperienceView = ({formData, setFormData,handleSaveData}) => {
    return (
      <div className="h-auto flex flex-col justify-center items-center mt-10 border">
      <div className="bg-[#ffffff] shadow-lg rounded px-8 pt-6 pb-8 mb-4">
      <Formcontrols controls={controls} formData={formData} setFormData ={setFormData} />
      </div>
  
      <button onClick={()=>{handleSaveData('experience')}} className=" border border-orange-600 font-bold text-[16px] p-4 mt-[10px] border hover:active:bg-grey-500 active:text-orange-400  ">Add Info</button>
      
      </div>
    )
  }
  
  export default AdminExperienceView