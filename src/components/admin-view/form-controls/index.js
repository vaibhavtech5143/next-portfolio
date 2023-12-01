"use client"

export default function Formcontrols({ controls, formData, setFormData }) {




  return controls.map((controlItem) => (

   
<div
      key={controlItem.name}
      className="text-gray-600 align-center h-100%  mt-10"
    >
     
       
          <h2 className="text-gray-900 flex text-lg mb-1 font-medium title-font">
            Fill The Data To Update It
          </h2>
            <label className="  text-sm text-gray-600">{controlItem.label}</label>
            <input
              placeholder={controlItem.placeholder}
              type={controlItem.type}
              id={controlItem.name}
              name={controlItem.name}
              value={formData[controlItem.name]}
              onChange={(e) => {
                setFormData({ ...formData, [controlItem.name]: e.target.value });
              }}
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3  transition-colors duration-200 ease-in-out  "
            />
    </div>
  ));
}
