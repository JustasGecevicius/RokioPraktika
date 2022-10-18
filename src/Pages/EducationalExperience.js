import { useState } from "react";
import { Button } from "../Components/Button";
import { InputField } from "../Components/InputFields";

function EducationalExperience(props) {
  const [sectionsId, setSectionsId] = useState(1);
  const [sectionsObject, setSectionsObject] = useState({ 0: {} });
  const [saveState, setSaveState] = useState({});

  const handleClick = (e) => {
    setSectionsId(sectionsId + 1);
    setSectionsObject({ ...sectionsObject, [sectionsId]: {} });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSectionsObject({
      ...sectionsObject,
      [e.target.form.id]: {
        ...sectionsObject[e.target.form.id],
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaveState({ ...saveState, [e.target.id]: true });
  };

  const handleEdit = (e, elem) => {
    e.preventDefault();
    setSaveState({ ...saveState, [elem]: false });
  };

  return (
    <div>
      <h2> Education</h2>

      {Object.keys(sectionsObject).map((elem, index) => {
        return saveState[elem] ? (
          <div key={index}>
            {Object.keys(sectionsObject[elem]).map((fieldName, index) => {
              return (
                <div key={index}>
                  <p>
                    <b>{fieldName}:</b>
                  </p>
                  <p>{sectionsObject[elem][fieldName]}</p>
                </div>
              );
            })}
            <Button
              text="Edit"
              onClick={(e) => {
                handleEdit(e, elem);
              }}
            />
            {console.log("Save")}
          </div>
        ) : (
          <form key={index} onSubmit={handleSave} id={index}>
            <InputField
              value={[sectionsObject[index]["School Name"] || ""]}
              name="School Name"
              onChange={handleChange}
            />
            <InputField
              value={[sectionsObject[index]["Title of Study"] || ""]}
              name="Title of Study"
              onChange={handleChange}
            />
            <InputField
              value={[sectionsObject[index]["From"] || ""]}
              name="From"
              onChange={handleChange}
              type="date"
            />
            <InputField
              value={[sectionsObject[index]["To"] || ""]}
              name="To"
              onChange={handleChange}
              type="date"
            />
            <Button type="button" text="Delete" />
            <Button type="submit" text="Save" />
          </form>
        );
      })}
      <Button type="button" text="Add" onClick={handleClick} />
    </div>
  );
}
export default EducationalExperience;
