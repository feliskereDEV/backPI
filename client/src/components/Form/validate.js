export const validate = (data)=>{
    const regexName = /^[a-zA-Z\s]+$/;
    let errors = {};

    if (!data.name){
        errors.name = "Name is required"
    } else if(data.name.length > 15){
        errors.name = "Name is too long"
    } else if (!regexName.test(data.name)) errors.name = "You can only use letters"

    if (!data.image){
        errors.image = "Image is required"
    }

    if (!data.description) {
        errors.description = "Description is required"
    }

   

    return errors
}