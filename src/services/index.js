export async function addData(currentSelectedTab,formData){
    try {

        const response = await fetch(`/api/${currentSelectedTab}/post`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(formData),
        });
        const result = await response.json();
        return result;

        
    } catch (error) {
        console.log(error);
        
    }
}
export async function getData(currentSelectedTab){
    try {

        const response = await fetch(`/api/${currentSelectedTab}/get`,{
            method:"GET",
        });
        const result = await response.json();
        console.log(result);
        return result;

        
    } catch (error) {
        console.log(error);
        
    }
}

export async function updateData(currentSelectedTab,formData){
    try {

        const response = await fetch(`/api/${currentSelectedTab}/update`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(formData),
        });
        const result = await response.json();
        return result;

        
    } catch (error) {
        console.log(error);
        
    }
}

/**
 * 
 * @param {object} formData 
 * @returns {object} 
 * 
 * This function is used to login to the system.
 * It takes in the form data as an argument and sends it to the backend.
 * The backend then returns a response containing the result.
 */
export async function Login(formData) {
  try {
    const response = await fetch(`/api/login/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getRequest(Login){
    try {

        const response = await fetch(`/api/login/get`,{
            method:"GET",
        });
        const result = await response.json();
        console.log(result);
        return result;

        
    } catch (error) {
        console.log(error);
        
    }
}