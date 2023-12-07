import Formcontrols from "../form-controls";
const controls = [
  {
    name: "name",
    placeholder: "Project Name",
    type: "text",
    label: "Project Name",
  },
  {
    name: "technologies",
    placeholder: "Enter Technologies",
    type: "text",
    label: "Enter Technologies",
  },
  {
    name: "website",
    placeholder: "Website",
    type: "text",
    label: "Website",
  },
  {
    name: "github",
    placeholder: "Github",
    type: "text",
    label: "github",
  },
  {
    name: "demo",
    placeholder: "Live Demo Url",
    type: "text",
    label: "Live Demo Url",
  },
];

const AdminProjectsView = ({formData, setFormData,handleSaveData,data}) => {
  return (
    <div className="h-auto flex flex-col justify-center items-center mt-10 border">
        <div className="mb-4 display flex flex-col border"> {data?.map(item=>
      <div key={item._id} className="display flex flex-row border font-medium">
      <p>name: ,{item.name}</p>
      <p>technologies: {item.technologies}</p>
      <p>website: {item.website}</p>
     <p>github: {item.github}</p>
      <p>demo: {item.demo}</p>



      </div>
    )}</div>
    
    <div className="bg-[#ffffff] shadow-lg rounded px-8 pt-6 pb-8 mb-4">
    <Formcontrols controls={controls} formData={formData} setFormData ={setFormData} />
    
    
    </div>
    {/* <Formcontrols  controls={controls} formData={formData} setFormData ={setFormData}/> */}
    <button onClick={()=>{handleSaveData('projects')}} className=" border border-orange-600 font-bold text-[16px] p-4 mt-[10px] border hover:active:bg-grey-500 active:text-orange-400  ">Add Info</button>
    
    </div>
  )
}

export default AdminProjectsView