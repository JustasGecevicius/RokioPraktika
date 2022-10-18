import { InputField } from "../Components/InputFields";
import { Button } from "../Components/Button";
import { useState } from "react";
function GeneralInformation (props){


    const [formData, setFormData] = useState({});
    const [formSave, setFormSave] = useState(false);

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value.trim()
        });

      };

      const handleSubmit = (e) => {
        e.preventDefault()
        setFormSave(true);
      };
      const handleEdit = (e) => {
        e.preventDefault()
        setFormSave(false);
      }



    return (
        <div className="GeneralInformation">
            <h2 id = "generalInformationForm"className="GeneralInformationTitle">General Information</h2>

              {formSave ? (
                <div>
                    {Object.keys(formData).map((key, index) => {
                        return(
                        <div key={index}>
                            <p><b>{key}:</b></p>
                            <p>{formData[key]}</p>
                        </div>
                        )
                    })}                    
                    <Button text="Edit" onClick={handleEdit}/>                    
                </div>
              ) : (
                <form className="GeneralInformationContent" onSubmit={handleSubmit}> 
                <InputField value = {formData["First Name"] || ""} type="text" name = "First Name" onChange={handleChange}/>
                <InputField value = {formData["Last Name"] || ""} type="text" name = "Last Name" onChange={handleChange}/>
                <InputField value = {formData["Email"] || ""} type="" name ="Email" placeholder = "email@mail.com" onChange={handleChange}/>
                <InputField value = {formData["Phone Number"] || ""} type="" name = "Phone Number" placeholder = "123-456-7890" onChange={handleChange}/>
                <Button text = "Save" type = "submit"/>
                </form>           
                )}  
            
        </div>
    )
}

export default GeneralInformation;