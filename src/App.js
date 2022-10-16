import './App.css';
import EducationalExperience from './Components/EducationalExperience';
import GeneralInformation from './Components/GeneralInformation';
import Header from './Components/Header';
import WorkExperience from './Components/WorkExperience';
import generalInformationObject from './Components/VariousObjects';
import { useState } from 'react';


function App() {

  const [generalInformation, setGeneralInformation] = useState([]);
  
  if(generalInformation.length === 0)
  {
    setGeneralInformation(generalInformationObject);
   console.log("baba");
  }







  return (
    <div className="App">

      <Header/>
      <GeneralInformation/>
      <EducationalExperience/>
      <WorkExperience/>

    </div>
  );
}

export default App;
