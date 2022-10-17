import './App.css';
import EducationalExperience from './Pages/EducationalExperience';
import GeneralInformation from './Pages/GeneralInformation';
import Header from './Pages/Header';
import WorkExperience from './Pages/WorkExperience';
import { useState } from 'react';


function App() {

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
