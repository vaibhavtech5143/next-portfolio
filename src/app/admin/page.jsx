"use client";

import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import Login from "@/components/admin-view/login";
import AdminProjectsView from "@/components/admin-view/projects";
import { addData, getData ,updateData} from "@/services";
import { useEffect, useState } from "react";

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


const initialLoginFormData={
  username:"",
  password:"",
}

const Admin = () => {
  const[homeViewFormData,sethomeViewFormData] = useState(initialHomeFormData)
  const[aboutViewFormData,setaboutViewFormData] = useState(initialaboutFormData)
  const[educationViewFormData,seteducationViewFormData] = useState(initialeducationFormData)
  const[experienceViewFormData,setexperienceViewFormData] = useState(initialexperienceFormData)
  const[projectsViewFormData,setprojectsViewFormData] = useState(initialprojectsFormData)
  const[login,setlogin] = useState(false)
  const[currentSelectedTab,setcurrentSelectedTab] = useState('home');
  const[allData,setAllData] = useState({});
  const[update,setUpdate]=useState(false);
  const[authUser,setAuthUser] = useState(false);
  const[loginForm,setLoginForm]= useState(initialLoginFormData);


 

const menuItems= [
  {
    id: "home",
    label:"Home",
    component:<AdminHomeView formData={homeViewFormData} setFormData={sethomeViewFormData} handleSaveData={handleSaveData} />,
},
  {
    id: "about",
    label:"About",
    component:<AdminAboutView  formData={aboutViewFormData} setFormData={setaboutViewFormData} handleSaveData={handleSaveData} />
  
},
  {
    id: "experience",
    label:"Experience",
    component:<AdminExperienceView  formData={experienceViewFormData} setFormData={setexperienceViewFormData} handleSaveData={handleSaveData}   data={allData?.experience} />
},
  {
    id: "education",
    label:"Education",
    component:<AdminEducationView  formData={educationViewFormData} setFormData={seteducationViewFormData} handleSaveData={handleSaveData} data={allData?.education} />
},
  {
    id: "projects",
    label:"Projects",
    component:<AdminProjectsView  formData={projectsViewFormData} setFormData={setprojectsViewFormData} handleSaveData={handleSaveData} data={allData?.projects}  />
},

  {
    id: "contact",
    label:"Contact",
    component:<AdminContactView/>
},

];


async function extractAllDatas(){
  const response = await getData(currentSelectedTab);
  console.log("resp",response);

if(currentSelectedTab === 'home' && response && response.data && response.data.length){
  sethomeViewFormData(response && response.data[0]);
  console.log("Set Value Of Home View",homeViewFormData);
  setUpdate(true)
}
if(currentSelectedTab === 'about' && response && response.data && response.data.length){
  setaboutViewFormData(response && response.data[0]);
  console.log("Set Value Of about View",aboutViewFormData);
  setUpdate(true)
}

  
  if(response?.success){
    setAllData({...allData,
      [currentSelectedTab]:response && response.data,
    })
  }

}


async function handleSaveData(){
  const dataMap ={
  home:homeViewFormData,
  about:aboutViewFormData,
  education:educationViewFormData,
  experience:experienceViewFormData,
  projects:projectsViewFormData,

  }

  // console.log("update1",update);

  const response = update? await updateData(currentSelectedTab, dataMap[currentSelectedTab]): await addData(currentSelectedTab, dataMap[currentSelectedTab]);
// setUpdate(false); 


// const response = await addData(currentSelectedTab, dataMap[currentSelectedTab]);
// setUpdate(false); 


  // console.log("update2",update);
  console.log("resp",response);


  if(response?.success){
    extractAllDatas();
    resetForm();
    // setUpdate(false); 

  }
}



useEffect(()=>{
  extractAllDatas();


},[currentSelectedTab])





function resetForm(){
  sethomeViewFormData(initialHomeFormData);
  setaboutViewFormData(initialaboutFormData);
  seteducationViewFormData(initialeducationFormData);
  setexperienceViewFormData(initialexperienceFormData);
  setprojectsViewFormData(initialprojectsFormData);

}

// console.log(allData,homeViewFormData,"homeViewFormData");

if(!authUser) return<Login formData={loginForm} setFormData={setLoginForm}/>
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
          setUpdate(false)
          
        
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