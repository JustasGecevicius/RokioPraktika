import React from "react";

import "./App.css";
import Header from "./Components/Header";
import { useState } from "react";

// Forms
import { GeneralInformation } from "./Forms/GeneralInformation";
import { EducationalExperience } from "./Forms/EducationalExperience";

const education_config = (name) => ({
  name,
  form: <EducationalExperience />,
  values: {},
});

function App() {
  const [educations, setEducations] = useState([education_config("1")]);

  console.log(educations);

  const handleAddEducation = () => {
    setEducations((prev) => [...prev, education_config(Math.random())]);
  };

  const handleDelete = (index) => {
    console.log(index);
    console.log(educations.filter((p, i) => i !== index));
    setEducations((prev) => prev.filter((p, i) => i !== index));
  };

  return (
    <div className="App">
      <Header />
      <GeneralInformation />

      {educations.map(({ form, name }, index) => (
        <div key={index}>
          {name}
          {React.cloneElement(form, {
            handleDelete: () => handleDelete(index),
          })}
        </div>
      ))}

      <button onClick={handleAddEducation}>Add</button>
    </div>
  );
}

export default App;
