import { useState } from "react";

export const GeneralInformation = () => {
  const [isFormSaved, setIsFormSaved] = useState(false);

  const [formValues, setFormValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    setIsFormSaved(true);

    setFormValues({
      firstName,
      lastName,
      email,
      phone,
    });
  };

  return (
    <div className="GeneralInformation">
      <h2 className="GeneralInformationTitle">General Information</h2>

      {isFormSaved ? (
        Object.values(formValues).map((v, index) => <div key={index}>{v}</div>)
      ) : (
        <form onSubmit={handleSubmit} className="GeneralInformationContent">
          <label>
            First Name:
            <input placeholder="First Name" name="firstName" />
          </label>

          <label>
            Last Name:
            <input placeholder="Last Name" name="lastName" />
          </label>

          <label>
            Email:
            <input
              placeholder="example@gmail.com"
              name="email"
              type="email"
              required
            />
          </label>

          <label>
            Phone Number:
            <input placeholder="123-456-7890" name="phone" type="number" />
          </label>

          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};
