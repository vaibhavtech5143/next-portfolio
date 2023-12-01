"use client";

import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import AdminProjectsView from "@/components/admin-view/projects";
import { addData } from "@/services";
import { useState } from "react";


const initialHomeFormData = {
  heading:"",
  summary:"",

}
const initialaboutFormData = {
  aboutme:"",
  noofprojects:"",
  yearofexperience:"",
  noofclients:"",
  skills:"",

}
const initialeducationFormData = {
  degree:"",
  year:"",
  college:"",

}
const initialexperienceFormData = {
  position:"",
  company:"",
  duration:"",
  location:"",
  jobprofile:"",

}
const initialprojectsFormData = {
  name:"",
  technologies:"",
  website:"",
  github:"",
  demo:"",

}

const Admin = () => {
  const[homeViewFormData,sethomeViewFormData] = useState(initialHomeFormData)
  const[aboutViewFormData,setaboutViewFormData] = useState(initialaboutFormData)
  const[educationViewFormData,seteducationViewFormData] = useState(initialeducationFormData)
  const[experienceViewFormData,setexperienceViewFormData] = useState(initialexperienceFormData)
  const[projectsViewFormData,setprojectsViewFormData] = useState(initialprojectsFormData)

const menuItems= [
  {
    id: "home",
    label:"Home",
    component:<AdminHomeView formData={homeViewFormData} setFormData={sethomeViewFormData} handleSaveData={handleSaveData} />,
},
  {
    id: "about",
    label:"About",
    component:<AdminAboutView  formData={aboutViewFormData} setFormData={setaboutViewFormData} handleSaveData={handleSaveData}  />
},
  {
    id: "experience",
    label:"Experience",
    component:<AdminExperienceView  formData={experienceViewFormData} setFormData={setexperienceViewFormData} handleSaveData={handleSaveData}  />
},
  {
    id: "education",
    label:"Education",
    component:<AdminEducationView  formData={educationViewFormData} setFormData={seteducationViewFormData} handleSaveData={handleSaveData}  />
},
  {
    id: "projects",
    label:"Projects",
    component:<AdminProjectsView  formData={projectsViewFormData} setFormData={setprojectsViewFormData} handleSaveData={handleSaveData}  />
},

  {
    id: "contact",
    label:"Contact",
    component:<AdminContactView/>
},

]


async function handleSaveData(){
  const dataMap ={
  home:homeViewFormData,
  about:aboutViewFormData,
  education:educationViewFormData,
  experience:experienceViewFormData,
  projects:projectsViewFormData,

  }

  const response = await addData(currentSelectedTab, dataMap[currentSelectedTab],FormData);

  console.log("resp",response);
  if(response.success){
    resetForm();
  }
}



const[login,setlogin] = useState(false)
const [currentSelectedTab,setcurrentSelectedTab] = useState('home');

function resetForm(){
  sethomeViewFormData(initialHomeFormData);
  setaboutViewFormData(initialaboutFormData);
  seteducationViewFormData(initialeducationFormData);
  setexperienceViewFormData(initialexperienceFormData);
  setprojectsViewFormData(initialprojectsFormData);

}
  return (
    <div className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Admin Panel</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
     {menuItems.map((item)=>{
      return(
        <button key={item.id} className="mr-5 hover:text-gray-900inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 active:bg-cyan-200" onClick={()=>{
          setcurrentSelectedTab(item.id);
          resetForm();
        
        }}>{item.label}</button>
      )
      

     })}
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={()=>{
      setlogin(!login)
    }}>{login?"logout":"login"}
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
  <div>
  <div>
  {menuItems.map(item => {
    if (item.id === currentSelectedTab) {
      return item.component;
    } else {
      return null; // You can replace `null` with a default component or another fallback content
    }
  })}
</div>
  </div>
</div>
  )
}

export default Admin