import { useState } from "react";

export const EducationalExperience = ({ handleDelete }) => {
  const [isFormSaved, setIsFormSaved] = useState(false);

  const [formValues, setFormValues] = useState({});

  const handleSubmit = (e) => {
    console.log("asdASDASdASD");
    e.preventDefault();

    const school = e.target.school.value;
    const study = e.target.study.value;

    setIsFormSaved(true);

    setFormValues({
      school,
      study,
    });
  };

  return (
    <div className="GeneralInformation">
      <h2 className="GeneralInformationTitle">General Information</h2>

      {isFormSaved ? (
        Object.values(formValues).map((v, index) => <div key={index}>{v}</div>)
      ) : (
        <form
          name={Math.random()}
          onSubmit={handleSubmit}
          className="GeneralInformationContent"
        >
          <label>
            School Name:
            <input placeholder="School Name" name="school" />
          </label>

          <label>
            Title of Study:
            <input placeholder="Title of Study" name="study" />
          </label>

          <button type="button" onClick={handleDelete}>
            Delete
          </button>
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};
