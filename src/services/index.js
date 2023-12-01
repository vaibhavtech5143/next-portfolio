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
export async function getData(currentSelectedTab,formData){
    try {

        const response = await fetch(`/api/${currentSelectedTab}/get`,{
            method:"GET",
        });
        const result = await response.json();
        return result;

        
    } catch (error) {
        console.log(error);
        
    }
}